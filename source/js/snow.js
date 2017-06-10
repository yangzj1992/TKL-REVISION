/**
 * Snowy Fun
 * @param  {
 *   el => 'String' 
 *   width => 100% or 1280
 *   height => 100% or 800
 *   cell => Number
 *   maxCell => Number
 *   line => Array
 * }
 * @return {init} 
 */
function Snowy(options) {
    function Snow(x, y, radius, fn) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.fn = fn;
        this.move = true;
    }
    Snow.prototype.refresh = function(toUpper) {
        let H = docEl.height - 2,
            prevReachX = ~~(this.x),
            nextReachX = ~~(this.x) + 1,
            thisReach = snowList.widthReach[prevReachX] || 0,
            useReachX,
            useReach;

        if (!this.move) {
            return;
        }
        if (snowList.widthReach[prevReachX] <= snowList.widthReach[nextReachX]) {
            useReachX = prevReachX;
        } else {
            useReachX = nextReachX;
        }
        useReach = snowList.widthReach[useReachX] || 0;
        if (this.y > H - thisReach - 2 && this.y < H - thisReach + 3) {
            if (toUpper) {
                this.y = H - thisReach;
                if (useReach < thisReach) {
                    this.x = useReachX;
                    thisReach = useReach;
                } else {
                    useReachX = ~~this.x
                }
                if (H - this.y + ~~(this.r / 6) >= thisReach) {
                    snowList.widthReach[useReachX] = H - this.y + ~~(this.r / 6);
                }
                this.move = false;
            } else {
                this.x = getRandom('x');
                this.y = 0;
            }
        } else if (this.y > docEl.height) {
            if (toUpper) {
                snowList.widthReach[useReachX] = H - this.y + ~~(this.r / 3);
                this.move = false;
            } else {
                this.x = getRandom('x');
                this.y = 0;
            }
        } else {
            this.x = this.fn.x(this.x, this.y);
            this.y = this.fn.y(this.y, this.y);
        }
    }

    function UnitBezier(p1x, p1y, p2x, p2y) {
        // pre-calculate the polynomial coefficients
        // First and last control points are implied to be (0,0) and (1.0, 1.0)
        this.cx = 3.0 * p1x;
        this.bx = 3.0 * (p2x - p1x) - this.cx;
        this.ax = 1.0 - this.cx - this.bx;

        this.cy = 3.0 * p1y;
        this.by = 3.0 * (p2y - p1y) - this.cy;
        this.ay = 1.0 - this.cy - this.by;
    }
    UnitBezier.prototype = {
        epsilon: 1e-3, // Precision  
        sampleCurveX: function(t) {
            return ((this.ax * t + this.bx) * t + this.cx) * t;
        },
        sampleCurveY: function(t) {
            return ((this.ay * t + this.by) * t + this.cy) * t;
        },
        sampleCurveDerivativeX: function(t) {
            return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
        },
        solveCurveX: function(x, epsilon) {
            let t0, t1, t2, x2, d2, i;
            // First try a few iterations of Newton's method -- normally very fast.
            for (t2 = x, i = 0; i < 8; i++) {
                x2 = this.sampleCurveX(t2) - x;
                if (Math.abs(x2) < epsilon)
                    return t2;
                d2 = this.sampleCurveDerivativeX(t2);
                if (Math.abs(d2) < epsilon)
                    break;
                t2 = t2 - x2 / d2;
            }

            // No solution found - use bi-section
            t0 = 0.0;
            t1 = 1.0;
            t2 = x;

            if (t2 < t0) return t0;
            if (t2 > t1) return t1;

            while (t0 < t1) {
                x2 = this.sampleCurveX(t2);
                if (Math.abs(x2 - x) < epsilon)
                    return t2;
                if (x > x2) t0 = t2;
                else t1 = t2;

                t2 = (t1 - t0) * .5 + t0;
            }
            return t2;
        },

        // Find new function of Y along curve X
        solve: function(x, epsilon) {
            return this.sampleCurveY(this.solveCurveX(x, epsilon));
        }
    }

    function listInit(o, that) {
        let base = getDistance(o.baseX),
            bezier,
            cubic,
            len,
            per,
            i;
        if (o.cubicBezier) {
            bezier = o.cubicBezier;
            cubic = new UnitBezier(bezier[0], bezier[1], bezier[2], bezier[3]);
        }
        for (i = 0, len = o.to.X - o.from.X; i < len; i++) {
            per = (i + 1) / len;
            if (cubic) {
                per = cubic.solve(per, 1e-3);
            }
            that.widthReach[~~(base + o.from.X) + i] = (o.to.Y - o.from.Y) * per + o.from.Y;
        }
    }

    function SnowList() {
        let len = options.line.length,
            i = 0;
        this.list = [];
        this.widthReach = [];
        for (; i < len; i++) {
            listInit(options.line[i], this);
        }
    }
    SnowList.prototype.refresh = function() {
        let lenNoMove = 0,
            i = 0,
            len = this.list.length;
        for (; i < len; i++) {
            if (this.list[i].move === false) {
                lenNoMove++;
            }
            if (len >= options.maxCell) {
                this.list[i].refresh(false);
            } else
                this.list[i].refresh(true);
        }
        /*clearInterval(interval);*/
        // if (len >= options.maxCell) return;
        if (len < options.maxCell) {
            for (i = 0, len = options.cell - (len - lenNoMove); i < len; i++) {
                !(function() {
                    let snow, randomX, randomY, randomR, randomFnx, randomFny;
                    randomX = getRandom('x');
                    randomY = getRandom('y');
                    randomR = getRandom('r');
                    randomFnx = getRandom('fnx');
                    randomFny = getRandom('fny');

                    snow = new Snow(randomX, randomY, randomR, {
                        x: randomFnx,
                        y: randomFny
                    });
                    snow.draw(cxt);
                    snowList.push(snow);
                })();
            }
        }
    }

    SnowList.prototype.push = function(snow) {
        this.list.push(snow);
    }

    SnowList.prototype.draw = function(cxt) {
        for (let i = 0, len = this.list.length; i < len; i++) {
            this.list[i].draw(cxt);
        }
        /*cxt.clearRect(300 - 6, docEl.height - 200, 200 + 12, 4);*/
    }
    SnowList.prototype.get = function(i) {
        return this.list[i];
    }
    SnowList.prototype.size = function() {
        return this.list.length;
    }
    Snow.prototype.draw = function(cxt) {
        let grd = cxt.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        grd.addColorStop(0, 'rgba(255, 255, 255, ' + ((this.r) / 6 * 1) + ')');
        grd.addColorStop(.5, 'rgba(255, 255, 255, ' + ((this.r) / 6 * .5) + ')');
        grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
        cxt.fillStyle = grd;
        cxt.fillRect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    }

    /**
     * Generate random x-pos, y-pos or fn functions
     * @param  {string} option x|y|fnx|fny
     * @return {int|Function} 
     */
    function getRandom(option) {
        let ret, random;
        switch (option) {
            case 'x':
                ret = Math.random() * docEl.width;
                break;
            case 'y':
                ret = (Math.random() - 1) * docEl.height;
                break;
            case 'r':
                ret = 2 + (Math.random() * 4);
                break;
            case 'fnx': // x axis offset
                random = 27 + Math.random() * 100;
                ret = function(x, y) {
                    return x + 0.5 * Math.sin(y / random);
                };
                break;
            case 'fny': // y axis offset
                random = 0.4 + Math.random() * 1.4;
                ret = function(x, y) {
                    return y + random;
                };
                break;
        }
        return ret;
    }

    function newSnow() {
        let snow, randomX, randomY, randomR, randomFnx, randomFny;
        for (let i = 0; i < options.cell; i++) {
            randomX = getRandom('x');
            randomY = getRandom('y');
            randomR = getRandom('r');
            randomFnx = getRandom('fnx');
            randomFny = getRandom('fny');
            snow = new Snow(randomX, randomY, randomR, {
                x: randomFnx,
                y: randomFny
            });
            snow.draw(cxt);
            snowList.push(snow);
        }
    }

    function getDistance(n) {
        if (n.toString().indexOf('%') !== -1) {
            n = n.split('%')[0] / 100 * el.offsetWidth;
        }
        return n;
    }


    // Start paint
    let el = document.getElementById(options.el) || document.getElementsByTagName('body')[0],
        docEl = {
            width: getDistance(options.width),
            height: getDistance(options.height)
        },
        canvas = document.createElement('canvas'),
        cxt, interval;
    el.innerHTML = '';
    el.appendChild(canvas);
    cxt = canvas.getContext('2d');
    // Create snow objects
    let snowList = new SnowList();

    function init() {
        canvas.height = docEl.height;
        canvas.width = docEl.width;
        snowList = new SnowList();
        newSnow();
    }
    init();

    // Refresh snow position data, and redraw them in each frame
    interval = setInterval(function() {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        snowList.refresh();
        snowList.draw(cxt);
    }, 13);

    return {
        init: init
    }
}

export {
    Snowy
}