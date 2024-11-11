const priceForm = document.querySelector('#price');
const slider = document.querySelector('.ad-form__slider');

noUiSlider.create(slider, {
  start: priceForm.placeholder,
  connect: [true, false],
  tooltips: true,
  step: 100,
  range: {
    'min': [0],
    '10%': [500, 100],
    '50%': [4000, 500],
    '70%': [10000, 500],
    'max': [100000]
  }
});

slider.noUiSlider.on('change', (values, handle) => {
  priceForm.value = Math.floor(values[handle]);
});

const updateSliderValueFromPlaceholder = () => {
  const newValue = Number(priceForm.placeholder);
  slider.noUiSlider.set(newValue);
};


const observer = new MutationObserver(() => {
  updateSliderValueFromPlaceholder();
});

observer.observe(priceForm, { attributes: true });

updateSliderValueFromPlaceholder();

export { slider };
