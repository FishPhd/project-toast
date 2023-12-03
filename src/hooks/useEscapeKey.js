
export function useEscapeKey(callback) {
    const handleKeyPress = (event) => {
        // Check if the pressed key is the one you're interested in
        if (event.key === 'Escape') {
            callback();
        }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component unmounts
    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
};
