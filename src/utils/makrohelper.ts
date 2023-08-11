import Makro from '../models/makro';

class MakroHelper {
    static insertAtPosition(
        textArea: HTMLTextAreaElement,
        target: string, 
        valueToAdd: Makro
    ) : string {
        const cursorPosition = textArea.selectionStart;
    
        target = target.slice(0, cursorPosition) + 
            valueToAdd.toString() + 
            target.slice(cursorPosition);
        textArea.focus();

        return target;
    }

    /*static insertAroundSelected(
        textArea: HTMLTextAreaElement,
        target: string,
        valueToAdd: string
    ) : string {
        const cursorStart = textArea.selectionStart;
        const cursorEnd = textArea.selectionEnd;

        target = target.slice(0, cursorPosition) + 
            valueToAdd + 
            target.slice(cursorPosition);
        textArea.focus();


    }*/
}

export default MakroHelper;
