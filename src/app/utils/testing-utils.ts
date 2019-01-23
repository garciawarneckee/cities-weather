import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

/** 
 * This is a generic file with utils function that will helps along testing files to reduce
 * duplicate code
 */

  /** Returns the element which content will be evaluated */
  function getElementBySelector(fixture: ComponentFixture<any>, className: string): HTMLElement {
    const de = fixture.debugElement.query(By.css(className))
    return de && de.nativeElement;
  }

  /**
   * TODO:// move it to a util class. 
   * Return the word capitalized in the first letter */
  function capitalizeWord(word: string) {
    return word && word[0].toUpperCase() + word.slice(1);
  }

  export {
    getElementBySelector,
    capitalizeWord
  }