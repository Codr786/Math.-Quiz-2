function login()
{
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("output_p1", output_p1);
    localStorage.setItem("output_p2", output_p2);
}