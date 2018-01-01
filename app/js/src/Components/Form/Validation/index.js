export default class Validation {
    required = value => (value ? undefined : 'Required');
    maxLength = (max, value) => value && value.length > max ? `Must be ${max} characters or less` : undefined;
}