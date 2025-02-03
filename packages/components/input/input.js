import { LitElement, html, css } from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';

export class Input extends LitElement {

  static styles = css`
    .form-text {
      /* Do we need this for all elements? */
      box-sizing: border-box;

      /* ^ If not set here, height is different than expected. */
      height: var(--ucds-form-element-height);
      width: var(--ucds-form-element-width);
      max-width: var(--ucds-form-element-maxwidth);
      padding: var(--ucds-form-element-padding);
      margin: 0; /* Inter-element spacing? */
      
      background-color: var(--ucds-color-palette-white);
      border: var(--ucds-form-element-border-width) solid var(--ucds-color-palette-gray-600);
      border-radius: var(--ucds-form-element-border-radius);
      transition: border-color 500ms ease;

      /* Ensure consistency, even on mobile (Should we reduce size on forms on mobile?). */
      font-size: 1rem;
      
      /* Ensure all text inputs are left-aligned (i.e. 'currency' is right-aligned). */
      text-align: left;

      &::placeholder {
        font-style: italic;
        color: var(--ucds-color-palette-gray-400);
      }
      
      &:hover,
      &:active,
      &:focus {
        outline: none; /* Get rid of any native accessibility focus for now? */
      }

      &:hover {
        border-color: var(--ucds-color-action-hover);
      }

      &:active {
        border-color: var(--ucds-color-action-active);
      }

      &:focus {
        border-color: var(--ucds-color-action-focus);
        /* Common focus style? */
      }
      
      &.error {
        
      }
    }
  `;

  static properties = {
    formId: { type: String, attribute: "id" },
    formType: { type: String, attribute: "type" },
    value: { type: String, attribute: "value" },
    size: { type: Number, attribute: "size" },
    maxlength: { type: Number, attribute: "maxlength" },
    placeholder: { type: String, attribute: "placeholder" }
  };

  constructor() {
    super();
    this.formId = "text";
    this.formType = "text";
  }

  render() {
    return html`
      <input type="${this.formType}" 
             class="form-text"
             id="${this.formId}"
             name="${this.formId}"
             .value="${ifDefined(this.value)}"
             size="${ifDefined(this.size)}"
             maxlength="${ifDefined(this.maxlength)}"
             placeholder="${ifDefined(this.placeholder)}">
    `;
  }
}

customElements.define('ucds-input', Input);
