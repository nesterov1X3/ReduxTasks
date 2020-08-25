export const GO_PREV ='USER/GO_PREV';
export const GO_NEXT ='USER/GO_NEXT';

export const goPrev = () => {
   return {
       type: GO_PREV
   }
}

export const goNext = () => {
    return {
        type: GO_NEXT
    }
 }