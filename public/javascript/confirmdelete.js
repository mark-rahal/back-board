function confirmDelete(threadId) {
    let id = prompt('Enter the thread ID to confirm deletion.');
    threadId.parseInt();
    if (id === threadId) {
        return true;
    }
    else {
        alert('Incorrect thread ID entered.');
    }
    return false;
}