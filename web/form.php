 <?php


    if (!empty($_POST)) {
        $servername = 'localhost';
        $username = 'root';
        $password = '';
        $database = 'corona';

        //database connection
        $conn = mysqli_connect($servername, $username, $password, $database);
        if (!$conn) {
            die('Connection Failed:' . mysqli_connect_error());
        }

        $email = $_POST['email'];
        $name = $_POST['name'];
        $gender = $_POST['gender'];
        //questions
        $fever = $_POST['fever'];
        $dry_cough = $_POST['dry_cough'];
        $tiredness = $_POST['tiredness'];
        $aches_pains = $_POST['aches_pains'];
        $sorethroat = $_POST['sorethroat'];
        $diarrhoea = $_POST['diarrhoea'];
        $headache = $_POST['headache'];
        $loss_of_taste_or_smell = $_POST['loss_of_taste_or_smell'];
        $rash_on_skin = $_POST['rash_on_skin'];
        $difficulty_in_breathing = $_POST['difficulty_in_breathing'];
        $chest_pain = $_POST['chest_pain'];
        $loss_of_speech = $_POST['loss_of_speech'];



        $sql = "insert into form1 (email, name, gender ,fever , dry_cough , tiredness , aches_pains , sorethroat , diarrhoea , headache , loss_of_taste_or_smell , rash_on_skin , difficulty_in_breathing , chest_pain , loss_of_speech) 
    values('$email','$name', '$gender', '$fever' , '$dry_cough' , '$tiredness' , '$aches_pains' , '$sorethroat' , '$diarrhoea' , '$headache', '$loss_of_taste_or_smell' , '$rash_on_skin' , '$difficulty_in_breathing' , '$chest_pain' , '$loss_of_speech' )";
        $run = mysqli_query($conn, $sql);

        if ($run) {
            echo 'Data added';
        } else {
            echo 'Data not added' . mysqli_error($conn);
        }
        mysqli_close($conn);
    }


    ?> 