var uid;
var idvar;
var google;

// Prevent forms from submitting.
function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }
}
//window.addEventListener('load', preventFormSubmit);

function handleFormSubmit(formObject) {
    idvar = document.getElementById("idfromurl");

    //idvar.value = 1234;
    //idvar.value = uid;
    idvar.value = getUserID();
    //google.script.run.withSuccessHandler(updateUrl).processForm(formObject);
    runProcess(formObject);
}
function updateUrl(url) {
    console.log('Uploaded');
}
function getUserID() {
    if (isAppsScript()) {
        uid = "<?!= uid ?>";
    }
    else {
        var url = new URL(window.location.href);
        uid = url.searchParams.get("uid");
    }
    return uid;
}
function runProcess(formObject) {
    console.log(
        'calling runProcess returning ' + uid + ' and ' + document.getElementById("InputFirstName").value +
        ' and ' + document.getElementById("InputLastName").value);
    if (isAppsScript()) {
        console.log('calling google scripts')
        google.script.run.withSuccessHandler(updateUrl).processForm(formObject);
    }
    else {
        console.log('not calling google scripts')
        //google.script.run.withSuccessHandler(updateUrl).processForm(formObject);
    }
}
function isAppsScript() {
    if (google === undefined) {
        return false;
    } else {
        return true;
    }
}