        const modals = () => {
            function bindModal(btnSelector, modalSelector, closeSelector) {
                const btn = document.querySelectorAll(btnSelector);
                const modal = document.querySelector(modalSelector);
                const close = modal.querySelector(closeSelector);
                

                btn.forEach(item => {
                    item.addEventListener('click', () => {
                        modal.style.display = 'block';
                    });
                });

                close.addEventListener('click', () => {
                    modal.style.display = 'none';
                });

                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            }

            bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
            bindModal('.phone_link', '.popup', '.popup_close');
            bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
        }

        modals();


        const deadline = '2024-10-24'

        function getTimeRemaining (endTime) {
            const time = Date.parse(endTime) - Date.parse(new Date())
            
            const days = Math.floor((time/1000/60/60/24)),
                hours = Math.floor((time/1000/60/60)%24),
                minutes = Math.floor((time/1000/60)%60),
                seconds = Math.floor((time/1000)%60);

            return {
                'total': time,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
        
        }

        
        function setClock(endTime) {
            
            const days = document.querySelector('#days'),
                hours = document.querySelector('#hours'),
                minutes = document.querySelector('#minutes'),
                seconds = document.querySelector('#seconds');

            function updateClock (){
                const time = getTimeRemaining(endTime)
                days.innerHTML = addZero(time.days)
                hours.innerHTML = addZero(time.hours)
                minutes.innerHTML = addZero(time.minutes)
                seconds.innerHTML = addZero(time.seconds)

                if (time.total <=0) {
                    days.innerHTML = '00'
                    hours.innerHTML = '00'
                    minutes.innerHTML = '00'
                    seconds.innerHTML = '00'
                    clearInterval(updateClock)
                }

            }
            updateClock()
            setInterval(updateClock,1000)


        }
        function addZero(d) {
            if (d<10) {
                return '0'+d
            } 
            else {
                return d
            }
        }

        setClock(deadline)






    const tabs = (headSelector, tabSelector, contentSelector, activeClass) => {
        const header = document.querySelector(headSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);
                
        function hideContent() {
            content.forEach((item) => {
                item.style.display = 'none';
            })
            tab.forEach((item) => {
                item.classList.remove(activeClass)
            })

        }

        function showContent(i = 0) {
            tab[i].classList.add(activeClass)
            content[i].style.display = 'block'
        }

        header.addEventListener('click', (event) => {
            if (event.target.classList.contains(tabSelector.replace(/\./, '')) || event.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, index) => {
                    if (item == event.target || item == event.target.parentNode) {
                        hideContent()
                        showContent(index)
                    }
                })

            }
        })
    }

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after-click')

