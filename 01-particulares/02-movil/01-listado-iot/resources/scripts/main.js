import tools from './tools';

const $config = {
    selectors: {
        checks: '.vfes-form__checkbox',
        columns: '.filter__column',
        container: '.filter',
        ctaPlazos: '.vfms-button--plazos',
        ctaContado: '.vfms-button--contado',
        filterPay: '.filter__pay',
        labels: '.vfes-form__label',
        list: '.filter__list',
        product: '.vfes-rates',
        radios: '.vfes-form__radio',
        search: '.filter__search',
        searchEmpty: '.filter__search-empty',
        selector: '.filter__item',
		selectorsButton: '.filter__title',
		button: '.vfms-button'
    },
    classes: {
        open: 'open',
		unabled: 'unabled',
		hide: 'hide'
    }
}


tools.onStylesReady = () => {
	console.log("Site visually ready")
}
const $selectors = $config.selectors;
const $classes = $config.classes;
const $document = document;
let message = $document.querySelector($selectors.searchEmpty);
let selectorsButton = $document.querySelectorAll($selectors.selectorsButton);
let allProducts = $document.querySelectorAll($selectors.product);
let filters = [], filtersBrand = [], filtersType = [];

if (allProducts.length === 0) {
	message.style.display = 'block';

} else {
	[].forEach.call(allProducts, element =>{
		let brand = element.getAttribute('data-brand');
		let type = element.getAttribute('data-type');

		let aux = `${brand};${type}`; 

		if (filters.indexOf(aux) === -1) { filters.push(aux) }
	});

	[].forEach.call(selectorsButton, button => {
		button.addEventListener('click', () => {
			button.closest($selectors.selector).classList.toggle($classes.open);
		});

	});


	[].forEach.call($document.querySelectorAll(`${$selectors.filterPay} ${$selectors.labels}`), label => {
		label.addEventListener('click', () => {
			let radioPrev = label.previousElementSibling;
			let radioValue = '';

			if (!radioPrev.checked) {
				radioValue = radioPrev.value;

				[].forEach.call(label.closest($selectors.product).querySelectorAll(`${$selectors.button}`), button => {
					button.style.display = 'none';
				});

				label.closest($selectors.product).querySelector(`${$selectors.button}--${radioValue}`).style.display = 'inline-block';
			}
		});
	});

	[].forEach.call($document.querySelectorAll(`${$selectors.list} ${$selectors.labels}`), label => {
		label.addEventListener('click', e => {
			let checkbox = label.previousElementSibling;
			let productsViewed = [];
			allProducts = $document.querySelectorAll($selectors.product);
			message.style.display = 'none';

			[].forEach.call(allProducts, product => {
				if (!product.parentElement.classList.contains($classes.hide)) {
					productsViewed.push(product);
				}
			});

			if (checkbox.checked) {
				if (checkbox.name === 'data-brand') {
					filtersBrand.splice(filtersBrand.indexOf(checkbox.value), 1);
				} else {
					filtersType.splice(filtersType.indexOf(checkbox.value), 1);
				}
			} else {
				if (checkbox.name === 'data-brand') {
					filtersBrand.push(checkbox.value);
				} else {
					filtersType.push(checkbox.value);
				}
			}

			if (filtersBrand.length === 0 && filtersType.length === 0) {
				[].forEach.call(allProducts, product => {
					product.parentElement.classList.remove($classes.hide);
				});

				[].forEach.call($document.querySelectorAll($selectors.checks), check => {
					check.removeAttribute('disabled');
				});
				
			} else {
				let options = [];

				if (filtersBrand.length > 0) {
					[].forEach.call(filtersBrand, brand => {
						[].forEach.call(filters, filter => {
							if (filter.indexOf(brand) >= 0 && options.indexOf(filter) === -1) {
								options.push(filter);
							}
						});
					});
				}

				if (filtersType.length > 0) {
					[].forEach.call(filtersType, type => {
						[].forEach.call(filters, filter => {
							if (filter.indexOf(type) >= 0 && options.indexOf(filter) === -1) {
								options.push(filter);
							}
						});
					});
				}

				[].forEach.call(productsViewed, product => {
					product.parentElement.classList.add($classes.hide);
				});

				[].forEach.call($document.querySelectorAll($selectors.checks), check => {
					check.setAttribute('disabled', 'disabled');
				});

				[].forEach.call(options, option => {
					
					option = option.split(';');

					$document.querySelector(`#${option[0]}`).removeAttribute('disabled');
					$document.querySelector(`#${option[1]}`).removeAttribute('disabled');

					[].forEach.call($document.querySelectorAll(`${$selectors.product}[data-brand="${option[0]}"][data-type="${option[1]}"]`), product => {
						product.parentElement.classList.remove($classes.hide);
					});
				});
			}

			if ($document.querySelectorAll(`${$selectors.product}:not(.hide)`).length === 0) { message.style.display = 'block'; }
		});
	});
}
