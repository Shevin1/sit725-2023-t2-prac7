const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image_link').val();
    formData.description = $('#description').val();
    formData.link = $('#link').val();
    console.log("Form Data Submitted: ", formData);
    postDog(formData)
}

function postDog(dog) {
    $.ajax({
        url: '/api/dog',
        type: 'POST',
        data: dog,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('Animal created')
            }
        }
    })
}

function getAllDogs() {
    $.get('/api/dog', (result) => {
        if (result.statusCode === 200) {
            addCards(result.data);
        }
    })
}

let socket = io();
socket.on('number', (msg) => {
    console.log('Random Number: ' + msg);
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('.modal').modal();
    getAllDogs();
});

