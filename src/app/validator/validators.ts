import { FormGroup, FormControl } from "@angular/forms";

//Validate name format, return mismatch: true if invalid
export function nameValidator(control: FormControl) {
  let regex: any = /^[a-zA-Z]+$/
  return regex.test(control.value) ? null : {'mismatch': true}
}

//Validate email format, return mismatch: true if invalid
export function emailValidator(control: FormControl) {
  let regx: any = /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9])*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return regx.test(control.value) ? null : {'mismatch': true}
}

//Validate birthday, it cannot be today and after, return mismatch: true if invalid
export function birthdayValidator(control: FormControl) {
  let today: number = new Date().getTime()
  let birthday: number = new Date(control.value).getTime()
  let limit: number = new Date("1905-01-01").getTime()
  return birthday > limit && birthday < today ? null : {'mismatch': true}
}

// Validate password format, return noCharacter: true if password has no character
export function pcharacterValidator(control: FormControl) {
  let regex: any = /^(?=.*[a-zA-Z])[\s\S]{1,}$/
  return regex.test(control.value) ? null : {'noCharacter': true}
}

// Validate password format, return noDigit: true if password has no digit
export function pdigitValidator(control: FormControl) {
  let regex: any = /^(?=.*[0-9])[\s\S]{1,}$/
  return regex.test(control.value) ? null : {'noDigit': true}
}

export function psymbolValidator(control: FormControl) {
  let regex: any = /^[a-zA-Z0-9]+$/
  return regex.test(control.value) ? null : {'hasSymbol' : true}
}

// Validate confirm password, return mismatch: true if invalid
export function pconfirmValidator(group: FormGroup) {
  let valid: boolean = group.get('password').value === group.get('pconfirm').value
  return valid ? null : {'mismatch': true}
}
