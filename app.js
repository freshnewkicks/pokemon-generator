let con = document.querySelector('#container');
function generate() {

	let ask = document.querySelector('#input')
    addEventListener("keyup", function(event){
        event.preventDefault();
        if (event.keyCode === 13){
            document.querySelector('#btn').click();
        }
    });

	if (ask.value > 1 && ask.value < 152) {
		con.innerHTML = '';
		for (i = 0; i < ask.value; i++) {
			let pokeball = document.createElement('img');
			pokeball.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
				Math.random() * 152
			)}.png`;
			con.append(pokeball);
			console.log(`${ask.value}`);
		}
	} else if (ask.value > 152 || ask.value < 0) {
		con.innerHTML = '';
		con.appendChild('no');
	}
}

// for (i = 0; i < 7; i++){
//     let pokeball = document.createElement('img');
//     pokeball.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(Math.random() * 152)}.png`;
//     con.appendChild(pokeball);
// }
