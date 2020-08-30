<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Form</title>

    <link rel="stylesheet" href="form.css" />
</head>

<body>

    <div class="container">
        <div class="header">
            <h2>Fill up the form</h2>
        </div>

        <form class="form" id="form" name="form1" action="form.php" method="POST" onsubmit="return checkInput();">
            <div class="form-control">
                <label>Email</label>
                <input type="text" placeholder="Email" id="email" name="email" required />
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label>Full Name</label>
                <input type="text" placeholder="Username" id="username" name="name" required />
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>Gender</label><br>
                <input type="radio" name="gender" id="m" value="Male" required>Male</input>
                <input type="radio" name="gender" id="f" value="Female" required>Female</input>
                <input type="radio" name="gender" id="o" value="Others" required>Others</input><br>

                <small>Error message</small>
            </div>

            <div class="gen">
                <label>1. Do you have fever?</label><br>
                <input type="radio" name="fever" id="a1" value="Yes" required>Yes</input>
                <input type="radio" name="fever" id="a2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>2. Do you have dry cough?</label><br>
                <input type="radio" name="dry_cough" id="b1" value="Yes" required>Yes</input>
                <input type="radio" name="dry_cough" id="b2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>3. Do you feel tiredness?</label><br>
                <input type="radio" name="tiredness" id="c1" value="Yes" required>Yes</input>
                <input type="radio" name="tiredness" id="c2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>4. Do you have aches and pains?</label><br>
                <input type="radio" name="aches_pains" id="d1" value="Yes" required>Yes</input>
                <input type="radio" name="aches_pains" id="d2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>5. Do you have sore throat?</label><br>
                <input type="radio" name="sorethroat" id="e1" value="Yes" required>Yes</input>
                <input type="radio" name="sorethroat" id="e2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>6. Do you have diarrhoea?</label><br>
                <input type="radio" name="diarrhoea" id="f1" value="Yes" required>Yes</input>
                <input type="radio" name="diarrhoea" id="f2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>7. Do you have headache?</label><br>
                <input type="radio" name="headache" id="g1" value="Yes" required>Yes</input>
                <input type="radio" name="headache" id="g2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>8. Do you have loss of taste or smell?</label><br>
                <input type="radio" name="loss_of_taste_or_smell" id="h1" value="Yes" required>Yes</input>
                <input type="radio" name="loss_of_taste_or_smell" id="h2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>9. Do you have a rash on skin or discolouration of fingers or toes?</label><br>
                <input type="radio" name="rash_on_skin" id="i1" value="Yes" required>Yes</input>
                <input type="radio" name="rash_on_skin" id="i2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>10. Do you feel difficulty in breathing or shortness of breath?</label><br>
                <input type="radio" name="difficulty_in_breathing" id="j1" value="Yes" required>Yes</input>
                <input type="radio" name="difficulty_in_breathing" id="j2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>11. Do you feel chest pain or pressure?</label><br>
                <input type="radio" name="chest_pain" id="k1" value="Yes" required>Yes</input>
                <input type="radio" name="chest_pain" id="k2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>

            <div class="gen">
                <label>12. Do you feel loss of speech or movement?</label><br>
                <input type="radio" name="loss_of_speech" id="l1" value="Yes" required>Yes</input>
                <input type="radio" name="loss_of_speech" id="l2" value="No" required>No</input><br>
                <small>Error message</small>
            </div>
            <input type="submit" class="submit" value="submit"></input>

            <script>
                function checkInput() {




                    //Input validation.
                    if (
                        a1.checked == true &&
                        b1.checked == true &&
                        c1.checked == true &&
                        d1.checked == true &&
                        e1.checked == true &&
                        f1.checked == true &&
                        g1.checked == true &&
                        h1.checked == true &&
                        i1.checked == true &&
                        j1.checked == true &&
                        k1.checked == true &&
                        l1.checked == true

                    ) {
                        alert("Go to hospital , Be Safe");
                    } else if (
                        a2.checked == true &&
                        b2.checked == true &&
                        c2.checked == true &&
                        d2.checked == true &&
                        e2.checked == true &&
                        f2.checked == true &&
                        g2.checked == true &&
                        h2.checked == true &&
                        i2.checked == true &&
                        j2.checked == true &&
                        k2.checked == true &&
                        l2.checked == true
                    ) {
                        alert("Stay Home , Stay Safe");
                    } else {
                        alert("Consult your Doctor and Stay Safe  ");
                        return true;
                    }
                }
            </script>

        </form>
    </div>

</body>

</html>