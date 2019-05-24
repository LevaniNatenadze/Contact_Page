    function menuToggle() {
        let toggler = document.querySelector(".hamburger");
        let menu = document.querySelector(".overlay");

        function openMenu() {
            this.classList.toggle("toggler_open");
            menu.classList.toggle("menu_open");
        }

        toggler.addEventListener('click', openMenu);
    }
    menuToggle();




    // END MENU TOGGLE

    // More Options
    function moreOption() {
        let button = document.getElementById("clickQuestion");
        let options = document.getElementById("options");

        button.addEventListener("click", hidefun);

        function hidefun() {
            this.style.display = "none";
            options.classList.add("clickActive");
        }
    }
    moreOption();

    // End More Options

    // VALIDATION
    function validate() { //ცუდი პრაქტიკაა, ეტყობა, მაგრამ გამომივიდა და აღარ შევეხე;
        let name = document.form.name.value;
        let mail = document.form.mail.value;
        let textarea1 = document.form.About.value;
        let alert = document.getElementById("Alert");
        let alert1 = document.getElementById("Alert1");
        let alert3 = document.getElementById("Alert3");
        let input = document.getElementsByClassName("form-input");

        let valid = true;
        if (name == "") {
            alert.innerHTML = "The field is required."
            input[0].classList.add("validate-not");
            valid = false;
        }
        if (mail == "") {
            alert1.innerHTML = "The field is required."
            input[1].classList.add("validate-not");
            valid = false;
        }
        if (textarea1 == "") {
            alert3.innerHTML = "The field is required."
            let textArea1 = document.getElementsByTagName("textarea");
            for (let i = 0; textArea1.length; i++) {
                textArea1[i].classList.add("validate-not");
                return false;
            }
            valid = false;
        }
        return valid;

    }
    // form.onsubmit = validate;
    // END VALIDATION

    // Back to Top
    function back_to_top() {
        let backToTopButton = document.getElementById("back-to-top");

        backToTopButton.addEventListener("click", toTop);

        function toTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }

    back_to_top();

    // AVATAR


    //ზუსტად ვერ მივხვდი ამ დავალებას, იმედია ასე უნდა ყოფილიყო
    //უბრალოდ სურათის არჩევა და დამატება შესაბამის ადგილას
    //მარტივად გამოვიდა და მაფიქრებს არასწორად ხომ არ ჩავწვდი იდეას.
    function avatar() {
        let realFileBtn = document.getElementById("real-input");
        let customBtn = document.getElementById("custom-button");
        let avatar_img = document.getElementById("avatarImg");

        customBtn.addEventListener("click", openBtn);

        function openBtn() {
            realFileBtn.click();
        };

        realFileBtn.addEventListener("change", addImg);

        function addImg() {
            if (this.files && this.files[0]) {
                avatar_img.src = URL.createObjectURL(this.files[0]);
            }
        };

    }
    avatar();
    // END AVATAR




    //Form input in console log გამოვიდა მიდის ინფორმაცია :yes:
    function consoleSubmit() {
        let input = document.querySelectorAll(".inputField > input");
        let form = document.querySelector("form#form");

        form.addEventListener("submit", function (e) {

            e.preventDefault();
            validate();

            for (i = 0; i < input.length; i++) {
                console.log(input[i].value);
            }

            form.reset();
        });
    }

    consoleSubmit();




    function activeLabel() { // ცუდად გავარჩიე, აშკარად input onclick - ში უნდა იყოს label - 
        //ის ფუნქცია, რითაც class დაემატება
        //მაგრამ ვერ ვფიქრობ გზით რომელიც არ დატვირთავს ბრაუზერს.
        //სულ არაფერს იყოს ესე.
        let inputField = document.getElementsByClassName("inputField");
        for (let i = 0; i < inputField.length; i++) {
            let label = inputField[i].getElementsByTagName("label");

            Array.from(label).forEach(function (item) {
                item.onclick = function () {
                    this.classList.toggle("activeLabel");

                }
            })



        }

    }

    activeLabel();