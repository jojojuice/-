/* событие загрузки страницы */
window.onload=function(){
	var item=document.getElementsByClassName("item");/* Получить значение элемента */
	var it=item[0].getElementsByTagName("div");/* присваиваем ему значение элемента */
	var content=document.getElementsByClassName("control");/* Получить значение содержимого */
	var con=content[0].getElementsByTagName("div");/*Назначить значение содержимого для con*/
	/* Цикл, каждый раз, когда нажимается знак, i добавляется к самому себе, если i меньше самого себя, 
	состояние знака становится активным. В других состояниях отображаемое значение равно none*/
	for(let i=0;i<it.length;i++){
		it[i].onclick = function(){
			for(let j=0;j<it.length;j++){
				it[j].className = '';
				con[j].style.display = "none";
			}
			this.className="active";
			it[i].index=i;
			con[i].style.display="block";
		}
	}
}