var text="";
while(!WScript.StdIn.AtEndOfStream){
	text+=WScript.StdIn.ReadAll();
}
WScript.StdOut.Write(
	encodeURI(text)
);
