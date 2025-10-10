import streamClient from "@/lib/stream"

export const useCreateNewChat = () => {
    const createNewChat = async ({
        members,
        createdBy, 
        groupName,
    }: {
        members: string[],
        createdBy: string,
        groupName?: string; 
}) => {
    const isGroupChat = members.length > 2;  // plus de 2 personnes àa fait déja un groupe

    // ici on verifie les conversation entre deux personnes au cas oùça existe ou pas  

    if(!isGroupChat){
        const existingChannel = await streamClient.queryChannels(
            {
                type: "messaging",
                members: {$eq: members},
            }, 
            {created_at: -1 },
            {limit: 1}
        );
    if(existingChannel.length > 0){
        const channel = existingChannel[0];
        const channelMembers = Object.keys(channel.state.members);

        if(
            channelMembers.length === 2 && 
            members.length === 2 && 
            members.every((member) => channelMembers.includes(member))
        ){
            console.log("Existing 1 - 1 Chat found");
            return channel;
        }
    }
    

    }

    const channelId = `${Date.now()}-${Math.random().toString(36).substring(2,15)}`;

    try {
        const channelData: {
            members: string[];
            created_by_id: string;
            name?: string;
        } = {
            members,
            created_by_id: createdBy, 
        };
        // Pour les groupes on peut ajouter d'autres données
        if(isGroupChat){
            channelData.name = groupName || `Group chat {${members.length} members}`;
        }
        const channel = streamClient.channel(
            isGroupChat? "team" : "messaging",
            channelId, 
            channelData
        );
        await channel.watch({
            presence: true,
        });
        return channel

    } catch (error) {
        throw error;
    }

}

return createNewChat;
}