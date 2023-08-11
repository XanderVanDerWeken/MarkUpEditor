import Makro from '../models/makro';

class MakroHelper {
    static insertAtPosition(
        textArea: HTMLTextAreaElement,
        target: string, 
        valueToAdd: Makro
    ) : string {
        const cursorPosition = textArea.selectionStart;
    
        target = target.substring(0, cursorPosition) + 
            valueToAdd.toString() + 
            target.substring(cursorPosition);
        textArea.focus();

        return target;
    }

    static insertAroundSelected(
        textArea: HTMLTextAreaElement,
        target: string,
        valueToAdd: Makro
    ) : string {
        const cursorStart = textArea.selectionStart;
        const cursorEnd = textArea.selectionEnd;
        const selection = target.substring(cursorStart, cursorEnd);
        
        target = target.substring(0, cursorStart) + 
            valueToAdd.getFirstTag() + 
            selection +
            valueToAdd.getEndTag() + 
            target.substring(cursorEnd)
            
        textArea.focus();

        return target;
    }
}

export default MakroHelper;
