
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);

    fullName = data.name
    sub = data.sub
    given_name = data.given_name
    family_name = data.family_name
    email = data.email
    verifiedEmail = data.email_verified
    picture = data.picture

}
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "794904804468-qobnah8cngv90v0npmc836v67jlbbpul.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
            theme: "filled_black",
            size: "large",
            shape: "circle",
            text: "$ {button.text}",
            type: "standard"
        }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}
