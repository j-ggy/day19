const MAX_DESCRIPTION_LENGTH = 160;

function truncateDescription(description: string): string {
    if(description.length > MAX_DESCRIPTION_LENGTH) {
        return description.slice(0, MAX_DESCRIPTION_LENGTH) + "..." 
    }
    return description;
}

export default truncateDescription;