let Q1 = ("Какой цвет тебе нравится?")
let Q2 = ("Ты часто гуляешь?")  
let Q3 = ("Ты занят?")
let Q4 = ("Какой цвет тебе НЕ нравится?")
let Q5 = ("где ты обычно гуляешь?")
let Q6= ("А ты часто ходишь в магазин?")
let Q7 = ("Какая музыка тебе нравится?")
let Q8 = ("Ты смотришь аниме?")

let A1=("1.красный 2.оранжевый 3.желтый 4.зеленый 5.голубой 6.синий 7.фиолетовый 8.другой")    
let A2=("1.точно да 2.да 3.скорее да 4.ближе к да 5.ближе к нет 6.скорее нет 7.нет 8.точно нет")
let A5 = ("1.по дороге до колледжа 2.в парке 3.в лесу 4.во дворе  5.как можно дальше от дома ")
let A6 =("1.ну может раз в неделю 2.раза два в неделю 3.раз в месяц 4.два раза в месяц  5.ну очень редко, пользуюсь доставкой 6.не хожу 7.каждый день 8.два раза в день ")
let A7= ("1.Азиатская 2.Западно-Европейская 3.Американская 4.Восточно-Европейская 5.Африканская 6.Народная 7.Духовная  8.Популярная")

function start()
{
    alert("Начнем?")
    alert(Q1)
    alert(A1)
    A=prompt()

    if (A>0 && A<9) {
      alert(Q2)
      alert(A2)
      A=prompt() /*Q2;A2*/
    }
    else {
        alert(Q1)
        A=prompt()
        alert(Q2)
        alert(A2)
        A=prompt()
      }
      if (A>0 && A<9) {
        alert(Q3)
        alert(A2)
        A=prompt() /*Q3;A2*/
      }
        if (A>0 && A<9) {
            alert(Q4)
            alert(A1)
            A=prompt() /*Q4;A1*/
        }
            if (A>0 && A<9) {
                alert(Q5)
                alert(A5)
                A=prompt() /*Q5;A5*/
            }
                if (A>0 && A<9) {
                    alert(Q6)
                    alert(A6)
                    A=prompt() /*Q6;A6*/
                }
                    if (A>0 && A<9) {
                        alert(Q7)
                        alert(A7)
                        A=prompt() /*Q7;A7*/
                    }
                        if (A>0 && A<9) {
                            alert(Q8)
                            alert(A2)
                            A=prompt() /*Q8;A2*/
                        }
alert("Это конец. Дальше ничего нет. Но можешь сделать это еще раз.")              
}
