import './form.css'

const ContactForm = ({
  fields,
  onSubmit,
  submitText = 'Envoyer',
  customClass = '',
}) => {
  return (
    <div className={`form ${customClass}`}>
      <form onSubmit={onSubmit} className="form__form">
        {fields.map((field, index) => (
          <div key={index} className="form__group">
            {/* Label */}
            {field.label && (
              <label htmlFor={field.id} className="form__label">
                {field.label}
              </label>
            )}

            {/* Input */}
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.name}
                className={`form__input ${field.className || ''}`}
                placeholder={field.placeholder || ''}
                aria-describedby={field.ariaDescribedBy || undefined}
                required={field.required || false}
              />
            ) : (
              <input
                type={field.type || 'text'}
                id={field.id}
                name={field.name}
                className={`form__input ${field.className || ''}`}
                placeholder={field.placeholder || ''}
                aria-describedby={field.ariaDescribedBy || undefined}
                required={field.required || false}
              />
            )}

            {/* Additional Help Text */}
            {field.helpText && (
              <div id={field.ariaDescribedBy} className="form__help">
                {field.helpText}
              </div>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <button type="submit" className="form__btn">
          {submitText}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
