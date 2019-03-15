function validateThreadForm() {
    let title = document.forms['threadCreate']['title'].value;
    let content = document.forms['threadCreate']['content'].value;

    if (title === '' || content === '') {
        alert('Title and Content are required fields.');
        return false;
    }
    else {
        return true;
    }
}