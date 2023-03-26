function useMultistepsForm(steps) {
    const [currentStepIndex, setcurrentStepIndex] = useState(0);

     const next = () =>{
        setcurrentStepIndex(i=>{
            if(i >= steps.length - 1) return i;
            return i + 1;
        })
     }
     const prev = () =>{
        setcurrentStepIndex(i=>{
            if(i <= 0) return i;
            return i - 1;
        })
     }

     const goTo = (index) =>{
        setcurrentStepIndex(index)
     }
  return {
    currentStepIndex,
    step:steps[currentStepIndex],
    next,
    prev,
    goTo
  }
}

export default useMultistepsForm