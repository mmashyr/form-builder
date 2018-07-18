function drawFormClick() {
    var jsonObj = JSON.parse(document.getElementById('form-json').value.replace(/\s+/g, " "));
    renderForm(jsonObj);
}

function renderForm(formJson) {
    var resultArea = document.getElementById("form-view");
    resultArea.appendChild(getElementByJson(formJson));
}

function getElementByJson(elementJson) {
    switch (elementJson.type) {
        case "form":
            return buildFormFromJson(elementJson);
        case "input":
            return buildInputFromJson(elementJson);
        case "title":
            return buildTitleFromJson(elementJson);
        case "checkbox":
            return buildCheckboxFromJson(elementJson);
    }

    function buildFormFromJson(elementJson) {
        var form = document.createElement("form");
        elementJson.items.forEach(function (element) {
            form.appendChild(getElementByJson(element));
        });
        return form;
    }

    function buildInputFromJson(elementJson) {
        var label = document.createElement("label");
        label.innerHTML = elementJson.label;
        var input = document.createElement("input");
        input.type = "text";
        input.id = elementJson.id;
        label.appendChild(input);
        return label;
    }

    function buildTitleFromJson(elementJson) {
        var title = document.createElement('h1');
        title.innerHTML = elementJson.label;
        return title;
    }

    function buildCheckboxFromJson(elementJson) {
        var label = document.createElement("label");
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = elementJson.id;
        label.appendChild(checkbox);
        var span = document.createElement("span");
        span.innerHTML = elementJson.label;
        label.appendChild(span);
        return label;
    }

}



