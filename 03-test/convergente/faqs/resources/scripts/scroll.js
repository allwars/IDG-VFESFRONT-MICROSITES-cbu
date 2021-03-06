export default function scrollTo(element, to, duration) {

    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    let animateScroll = () => {
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    }
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
    t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2.8) - 1) + b;
};
