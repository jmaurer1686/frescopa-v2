export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // store locator: ZIP field under the headline (demo only, no lookup behind it)
  if (block.classList.contains('card')) {
    const intro = block.firstElementChild.firstElementChild;
    const form = document.createElement('form');
    form.className = 'columns-zip';
    form.innerHTML = '<label for="columns-zip-input">Find another location now</label>'
      + '<div><input id="columns-zip-input" type="text" name="q" placeholder="ZIP code" autocomplete="postal-code" inputmode="numeric">'
      + '<button type="submit">Search</button></div>';
    form.addEventListener('submit', (e) => e.preventDefault());
    intro.append(form);
  }

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
