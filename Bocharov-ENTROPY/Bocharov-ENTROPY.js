let [,, s] = [...process.argv];
let alph = new Array();
for (let i = 0; i < s.length; i++){
	if (alph[s.charAt(i)])
		alph[s.charAt(i)]++;
	else
		alph[s.charAt(i)] = 1;
}

let n = 0;
for (let i in alph){
	alph[i] /= s.length;
	n++;
}

let h = 0;
for (let i in alph){
	h -= alph[i] * Math.log(alph[i]);
}
h /= Math.log(n);
if (h) 
	console.log(h);
else 
	console.log(0);