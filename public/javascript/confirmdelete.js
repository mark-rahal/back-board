function confirmDelete(threadId) {
    let id = prompt('Enter the thread ID to confirm deletion.');
    id.parseInt();

    if (!compareId(id, threadId)) {
        alert('Incorrect thread ID entered.');
        return false;
    }
    return true;
}

function compareId(enteredId, actualId) {
    if (enteredId === actualId) {
        return true;
    }
    return false;
}