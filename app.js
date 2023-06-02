(() => {

    ham.addEventListener('click', () => {
        ham.classList.toggle('x');
        nav.classList.toggle('open');
    });




    mapboxgl.accessToken = 'pk.eyJ1Ijoic29vamluamVvbmciLCJhIjoiY2xocTZ2YThiMDFiaDNnbzhiYjRqdGtlMSJ9.bRyIsMsxXa7-wX5x8kYcqg';

    let location = [14.433772083394864, 50.08704006273745];

    let map = new mapboxgl.Map({
        container: 'map',
        center: location,
        zoom: 14,
        style: 'mapbox://style/mapbox/dark-v10'
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    let marker = document.createElement('div');
    marker.id = 'marker';

    let popup = new mapboxgl.Popup({ offset: 70 })
        .setHTML('<div id="popup">Prague city university<br>City Centre Campus<br>Hybernská 24, Praha 1, Czech Republic</div>');

    new mapboxgl.Marker(marker, { anchor: 'bottom' })
        .setLngLat(location)
        .addTo(map)
        .setPopup(popup);






    const options = {
        rootMargin: '1000px 0px 0px 0px',
        treshold: 0.5
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, options);
    document.querySelectorAll('#about').forEach(el => obs.observe(el));

    const cursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY));
    });
    window.addEventListener('scroll', () => {
        const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
        cursor.style.top = scrollY + fromTop + 'px';
    });

    window.addEventListener('click', () => {
        if (cursor.classList.contains('click')) {
            cursor.classList.remove('click');
            void cursor.offsetWidth;
            cursor.classList.add('click');
        } else {
            cursor.classList.add('click');
        }

    });

    let head = Array.from(document.querySelectorAll("#title"));

    head.forEach((h) => {
        h.addEventListener('mouseover', () => {
            cursor.classList.add("grow");
        });
        h.addEventListener('mouseleave', () => {
            cursor.classList.remove("grow");
        });
    });

})();