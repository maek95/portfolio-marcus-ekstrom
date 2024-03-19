import { useTheme, useThemeDispatch } from "../ThemeContext";

export default function FontButton() {

  const { state } = useTheme();
  const dispatch = useThemeDispatch();

  return (
    
    <div className="flex flex-col gap-2 h-28">

      {state.userPreferences.fontSize === 'medium' ? (<button className="bg-inherit text-inherit border-inherit p-2 border-solid border rounded-lg cursor-pointer" onClick={() => {
        dispatch({
          type: 'change_fontSize',
          fontSize: 'x-large'
        })
      }}>
        Change Font Size of following text:
      </button>) :  (<button className="bg-inherit text-inherit border-inherit p-2 border-solid border rounded-lg cursor-pointer" onClick={() => {
        dispatch({
          type: 'change_fontSize',
          fontSize: 'medium'
        })
      }}>
        Change Font Size of following text:
      </button>)}

      <p style={{fontSize: `${state.userPreferences.fontSize}`}}>
       <b>{state.userPreferences.fontSize}</b>
      </p>
      
    </div>
      
  )


}