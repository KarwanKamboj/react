export default function ColorSwitch(
  {onChangeColor}
){
  return(
    <button onClick={e =>{
      e.stopPropagation(); // to stop click handler call so that event bubbling stops in dom tree,click handlng happens only for color switch not for any other div
      onChangeColor();
    }}>
      Change Color
    </button>
  );
}