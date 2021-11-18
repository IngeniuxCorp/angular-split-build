(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Rx'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-split', ['exports', '@angular/core', 'rxjs/Rx', '@angular/common'], factory) :
    (global = global || self, factory(global['angular-split'] = {}, global.ng.core, global.rxjs.Rx, global.ng.common));
}(this, (function (exports, core, Rx, common) { 'use strict';

    var BrowserService = /** @class */ (function () {
        function BrowserService() {
        }
        BrowserService.isIE = function () {
            var ua = window.navigator.userAgent;
            // Test values; Uncomment to check result …
            // IE 10
            // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
            // IE 11
            // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
            // IE 12 / Spartan
            // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
            // Edge (IE 12+)
            // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }
            // other browser
            return false;
        };
        return BrowserService;
    }());

    var CookieService = /** @class */ (function () {
        function CookieService() {
        }
        CookieService.prototype.get = function (cookieName) {
            var cookieList = window.top.document.cookie.split("; ");
            var cookieValue = "";
            for (var i = 0; i < cookieList.length; i++) {
                // separate name-value pairs
                var cookie = decodeURIComponent(cookieList[i]);
                var name = cookie.substring(0, cookie.indexOf("="));
                var value = cookie.substring(cookie.indexOf("=") + 1);
                // Compare the cookie name
                if (cookieName == name) {
                    cookieValue = value;
                    break;
                }
            }
            if (cookieValue == "undefined" || cookieValue == null)
                cookieValue = "";
            return cookieValue;
        };
        CookieService.prototype.set = function (name, value) {
            var isPermanent = true;
            // if there are three arguments
            if (arguments.length == 3) {
                isPermanent = arguments[2];
            }
            // Create a cookie string to write to the cookie file
            var cookieToken = name + "=" + decodeURIComponent(value) + ";";
            // if this is a permanent cookie
            if (isPermanent == true) {
                // Set the expiration date of the cookie to be one year from now
                var expDate = new Date();
                expDate.setDate(365 + expDate.getDate());
                cookieToken = cookieToken + " " +
                    "expires=" + expDate.toUTCString() + ";";
            }
            window.top.document.cookie = cookieToken;
        };
        return CookieService;
    }());

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var SplitAreaState = /** @class */ (function () {
        function SplitAreaState() {
        }
        return SplitAreaState;
    }());
    var SplitStateService = /** @class */ (function () {
        function SplitStateService(cookieService) {
            this.cookieService = cookieService;
            this.splitName = "AngularSplit";
        }
        SplitStateService.prototype.saveState = function (visibleAreaStates) {
            this.cookieService.set(this.splitName, JSON.stringify(visibleAreaStates));
        };
        SplitStateService.prototype.loadState = function () {
            var cookieVal = this.cookieService.get(this.splitName);
            return cookieVal ? JSON.parse(cookieVal) : null;
        };
        SplitStateService.ctorParameters = function () { return [
            { type: CookieService }
        ]; };
        SplitStateService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [CookieService])
        ], SplitStateService);
        return SplitStateService;
    }());

    var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$1 = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var SplitComponent = /** @class */ (function () {
        function SplitComponent(splitStateService, cdRef, elementRef, renderer) {
            this.splitStateService = splitStateService;
            this.cdRef = cdRef;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.direction = 'horizontal';
            this.gutterSize = 10;
            this.disabled = false;
            this.animateAreaToggle = false;
            this.dragStart = new core.EventEmitter(false);
            this.dragProgress = new core.EventEmitter(false);
            this.dragEnd = new core.EventEmitter(false);
            this.saveStates = false;
            this._coverDisplay = new Rx.BehaviorSubject("none");
            this.coverDisplay = this._coverDisplay.asObservable();
            this._visibleTransitionEndSub = new Rx.BehaviorSubject([]);
            /**
             * This event is fired when split area show/hide are done with animations completed.
             * Make sure use debounceTime and distinctUntilChange before subscription,
             * to handle the fact that adjacent split areas also triggering the event, during show/hide of single area.
             */
            this.visibleTransitionEnd = this._visibleTransitionEndSub.asObservable();
            this.minPercent = 5;
            this.areas = [];
            this.isDragging = false;
            this.containerSize = 0;
            this.areaASize = 0;
            this.areaBSize = 0;
            this.eventsDragFct = [];
        }
        Object.defineProperty(SplitComponent.prototype, "name", {
            get: function () {
                return this.splitStateService.splitName;
            },
            set: function (val) {
                if (val)
                    this.splitStateService.splitName = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "styleFlexDirection", {
            get: function () {
                return this.direction === 'vertical';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "dragging", {
            get: function () {
                // prevent animation of areas when animateAreaToggle is false, or resizing
                return !this.animateAreaToggle || this.isDragging;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "styleWidth", {
            get: function () {
                return (this.width && !isNaN(this.width) && this.width > 0) ? this.width + 'px' : '100%';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "styleHeight", {
            get: function () {
                return (this.height && !isNaN(this.height) && this.height > 0) ? this.height + 'px' : '100%';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "visibleAreas", {
            get: function () {
                return this.areas.filter(function (a) { return a.component.visible; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "nbGutters", {
            get: function () {
                return this.visibleAreas.length - 1;
            },
            enumerable: true,
            configurable: true
        });
        SplitComponent.prototype.ngOnChanges = function (changes) {
            if (changes['gutterSize'] || changes['disabled']) {
                this.refresh();
            }
        };
        SplitComponent.prototype.ngAfterViewInit = function () {
            if (!this.saveStates)
                return;
            var state = this.splitStateService.loadState();
            if (state && this.areas.length == state.length)
                this.areas.forEach(function (a, i) {
                    a.size = state[i].size;
                    a.component.visible = state[i].visible;
                });
            this.refresh();
        };
        SplitComponent.prototype.addArea = function (component, orderUser, sizeUser, minPixel) {
            this.areas.push({
                component: component,
                orderUser: orderUser,
                order: -1,
                sizeUser: sizeUser,
                size: -1,
                minPixel: minPixel
            });
            // this._saveState();
            this.refresh();
        };
        SplitComponent.prototype.updateArea = function (component, orderUser, sizeUser, minPixel) {
            var item = this.areas.find(function (a) { return a.component === component; });
            if (item) {
                item.orderUser = orderUser;
                item.sizeUser = sizeUser;
                item.minPixel = minPixel;
                // this._saveState();
                this.refresh();
            }
        };
        SplitComponent.prototype.removeArea = function (area) {
            var item = this.areas.find(function (a) { return a.component === area; });
            if (item) {
                var index = this.areas.indexOf(item);
                this.areas.splice(index, 1);
                this.areas.forEach(function (a, i) { return a.order = i * 2; });
                // this._saveState();
                this.refresh();
            }
        };
        SplitComponent.prototype.hideArea = function (area) {
            var item = this.areas.find(function (a) { return a.component === area; });
            if (item) {
                this._saveState();
                this.refresh();
            }
        };
        SplitComponent.prototype.showArea = function (area) {
            var item = this.areas.find(function (a) { return a.component === area; });
            if (item) {
                this._saveState();
                this.refresh();
            }
        };
        SplitComponent.prototype.isLastVisibleArea = function (area) {
            var visibleAreas = this.areas.filter(function (a) { return a.component.visible; });
            return visibleAreas.length > 0 ? area === visibleAreas[visibleAreas.length - 1] : false;
        };
        SplitComponent.prototype.refresh = function () {
            var _this = this;
            this.stopDragging();
            var visibleAreas = this.visibleAreas;
            // ORDERS: Set css 'order' property depending on user input or added order
            var nbCorrectOrder = this.areas.filter(function (a) { return a.orderUser !== null && !isNaN(a.orderUser); }).length;
            if (nbCorrectOrder === this.areas.length) {
                this.areas.sort(function (a, b) { return +a.orderUser - +b.orderUser; });
            }
            this.areas.forEach(function (a, i) {
                a.order = i * 2;
                a.component.setStyle('order', a.order);
            });
            // SIZES: Set css 'flex-basis' property depending on user input or equal sizes
            var totalSize = visibleAreas.map(function (a) { return a.sizeUser; }).reduce(function (acc, s) { return acc + s; }, 0);
            var nbCorrectSize = visibleAreas.filter(function (a) { return a.sizeUser !== null && !isNaN(a.sizeUser) && a.sizeUser >= _this.minPercent; }).length;
            if (totalSize < 99.99 || totalSize > 100.01 || nbCorrectSize !== visibleAreas.length) {
                var size_1 = Number((100 / visibleAreas.length).toFixed(3));
                visibleAreas.forEach(function (a) { return a.size = size_1; });
            }
            else {
                visibleAreas.forEach(function (a) { return a.size = Number(a.sizeUser); });
            }
            this.refreshStyleSizes();
            this.cdRef.markForCheck();
        };
        SplitComponent.prototype.refreshStyleSizes = function () {
            var visibleAreas = this.visibleAreas;
            var f = this.gutterSize * this.nbGutters / visibleAreas.length;
            visibleAreas.forEach(function (a) { return a.component.setStyle('flex-basis', "calc( " + a.size + "% - " + f + "px )"); });
            if (BrowserService.isIE()) {
                //ie and edge don't support flex-basis animation
                //fire event right here
                this.notify('visibleTransitionEnd');
            }
        };
        SplitComponent.prototype.startDragging = function (startEvent, gutterOrder) {
            var _this = this;
            startEvent.preventDefault();
            if (this.disabled) {
                return;
            }
            var areaA = this.areas.find(function (a) { return a.order === gutterOrder - 1; });
            var areaB = this.areas.find(function (a) { return a.order === gutterOrder + 1; });
            if (!areaA || !areaB) {
                return;
            }
            var prop = (this.direction === 'horizontal') ? 'offsetWidth' : 'offsetHeight';
            this.containerSize = this.elementRef.nativeElement[prop];
            this.areaASize = this.containerSize * areaA.size / 100;
            this.areaBSize = this.containerSize * areaB.size / 100;
            var start;
            if (startEvent instanceof MouseEvent) {
                start = {
                    x: startEvent.screenX,
                    y: startEvent.screenY
                };
            }
            else if (startEvent instanceof TouchEvent) {
                start = {
                    x: startEvent.touches[0].screenX,
                    y: startEvent.touches[0].screenY
                };
            }
            else {
                return;
            }
            //add the overlay transparent  cover to handle dragging over iframes
            this.eventsDragFct.push(this.renderer.listen('document', 'mousemove', function (e) { return _this.dragEvent(e, start, areaA, areaB); }));
            this.eventsDragFct.push(this.renderer.listen('document', 'touchmove', function (e) { return _this.dragEvent(e, start, areaA, areaB); }));
            this.eventsDragFct.push(this.renderer.listen('document', 'mouseup', function (e) { return _this.stopDragging(); }));
            this.eventsDragFct.push(this.renderer.listen('document', 'touchend', function (e) { return _this.stopDragging(); }));
            this.eventsDragFct.push(this.renderer.listen('document', 'touchcancel', function (e) { return _this.stopDragging(); }));
            areaA.component.lockEvents();
            areaB.component.lockEvents();
            this.isDragging = true;
            this._coverDisplay.next("block");
            this.notify('start');
        };
        SplitComponent.prototype.dragEvent = function (event, start, areaA, areaB) {
            if (!this.isDragging) {
                return;
            }
            var end;
            if (event instanceof MouseEvent) {
                end = {
                    x: event.screenX,
                    y: event.screenY
                };
            }
            else if (event instanceof TouchEvent) {
                end = {
                    x: event.touches[0].screenX,
                    y: event.touches[0].screenY
                };
            }
            else {
                return;
            }
            this.drag(start, end, areaA, areaB);
        };
        SplitComponent.prototype.drag = function (start, end, areaA, areaB) {
            var offsetPixel = (this.direction === 'horizontal') ? (start.x - end.x) : (start.y - end.y);
            var newSizePixelA = this.areaASize - offsetPixel;
            var newSizePixelB = this.areaBSize + offsetPixel;
            if (newSizePixelA <= areaA.minPixel && newSizePixelB < areaB.minPixel) {
                return;
            }
            var newSizePercentA = newSizePixelA / this.containerSize * 100;
            var newSizePercentB = newSizePixelB / this.containerSize * 100;
            if (newSizePercentA <= this.minPercent) {
                newSizePercentA = this.minPercent;
                newSizePercentB = areaA.size + areaB.size - this.minPercent;
            }
            else if (newSizePercentB <= this.minPercent) {
                newSizePercentB = this.minPercent;
                newSizePercentA = areaA.size + areaB.size - this.minPercent;
            }
            else {
                newSizePercentA = Number(newSizePercentA.toFixed(3));
                newSizePercentB = Number((areaA.size + areaB.size - newSizePercentA).toFixed(3));
            }
            areaA.size = newSizePercentA;
            areaB.size = newSizePercentB;
            this.refreshStyleSizes();
            this.notify('progress');
        };
        SplitComponent.prototype.stopDragging = function () {
            if (!this.isDragging) {
                return;
            }
            this.areas.forEach(function (a) { return a.component.unlockEvents(); });
            while (this.eventsDragFct.length > 0) {
                var fct = this.eventsDragFct.pop();
                if (fct) {
                    fct();
                }
            }
            this.containerSize = 0;
            this.areaASize = 0;
            this.areaBSize = 0;
            this.isDragging = false;
            this._coverDisplay.next("none");
            this._saveState();
            this.notify('end');
        };
        SplitComponent.prototype._saveState = function () {
            if (this.saveStates)
                this.splitStateService.saveState(this.areas.map(function (a) {
                    return {
                        size: a.size,
                        visible: a.component.visible
                    };
                }));
        };
        SplitComponent.prototype.notify = function (type) {
            var data = this.visibleAreas.map(function (a) { return a.size; });
            switch (type) {
                case 'start':
                    return this.dragStart.emit(data);
                case 'progress':
                    return this.dragProgress.emit(data);
                case 'end':
                    return this.dragEnd.emit(data);
                case 'visibleTransitionEnd':
                    return this._visibleTransitionEndSub.next(data);
            }
        };
        SplitComponent.prototype.ngOnDestroy = function () {
            this.stopDragging();
        };
        SplitComponent.ctorParameters = function () { return [
            { type: SplitStateService },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", String)
        ], SplitComponent.prototype, "direction", void 0);
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", Number)
        ], SplitComponent.prototype, "width", void 0);
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", Number)
        ], SplitComponent.prototype, "height", void 0);
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", Number)
        ], SplitComponent.prototype, "gutterSize", void 0);
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", Boolean)
        ], SplitComponent.prototype, "disabled", void 0);
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", Boolean)
        ], SplitComponent.prototype, "animateAreaToggle", void 0);
        __decorate$1([
            core.Output(),
            __metadata$1("design:type", Object)
        ], SplitComponent.prototype, "dragStart", void 0);
        __decorate$1([
            core.Output(),
            __metadata$1("design:type", Object)
        ], SplitComponent.prototype, "dragProgress", void 0);
        __decorate$1([
            core.Output(),
            __metadata$1("design:type", Object)
        ], SplitComponent.prototype, "dragEnd", void 0);
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", Boolean)
        ], SplitComponent.prototype, "saveStates", void 0);
        __decorate$1([
            core.Input(),
            __metadata$1("design:type", String),
            __metadata$1("design:paramtypes", [String])
        ], SplitComponent.prototype, "name", null);
        __decorate$1([
            core.Output(),
            __metadata$1("design:type", Rx.Observable)
        ], SplitComponent.prototype, "visibleTransitionEnd", void 0);
        __decorate$1([
            core.HostBinding('class.vertical'),
            __metadata$1("design:type", Object),
            __metadata$1("design:paramtypes", [])
        ], SplitComponent.prototype, "styleFlexDirection", null);
        __decorate$1([
            core.HostBinding('class.notrans'),
            __metadata$1("design:type", Object),
            __metadata$1("design:paramtypes", [])
        ], SplitComponent.prototype, "dragging", null);
        __decorate$1([
            core.HostBinding('style.width'),
            __metadata$1("design:type", Object),
            __metadata$1("design:paramtypes", [])
        ], SplitComponent.prototype, "styleWidth", null);
        __decorate$1([
            core.HostBinding('style.height'),
            __metadata$1("design:type", Object),
            __metadata$1("design:paramtypes", [])
        ], SplitComponent.prototype, "styleHeight", null);
        SplitComponent = __decorate$1([
            core.Component({
                selector: 'split',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n        <div #cover style=\"position:absolute;left:0;top:0;right:0;bottom:0;z-index:100;\"\n            [style.display]=\"coverDisplay | async\"></div>\n        <ng-content></ng-content>\n        <ng-template ngFor let-area [ngForOf]=\"areas\" let-index=\"index\" let-last=\"last\">\n            <split-gutter *ngIf=\"last === false && area.component.visible && !isLastVisibleArea(area)\" \n                          [order]=\"index*2+1\"\n                          [direction]=\"direction\"\n                          [size]=\"gutterSize\"\n                          [disabled]=\"disabled\"\n                          (mousedown)=\"startDragging($event, index*2+1)\"\n                          (touchstart)=\"startDragging($event, index*2+1)\"></split-gutter>\n        </ng-template>",
                styles: ["\n        :host {\n            display: flex;\n            flex-wrap: nowrap;\n            justify-content: flex-start;\n            flex-direction: row;\n        }\n\n        :host.vertical {\n            flex-direction: column;\n        }\n\n        split-gutter {\n            flex-grow: 0;\n            flex-shrink: 0;\n            flex-basis: 10px;\n            height: 100%;\n            background-color: #eeeeee;\n            background-position: 50%;\n            background-repeat: no-repeat;\n        }\n\n        :host.vertical split-gutter {\n            width: 100%;\n        }\n\n        :host /deep/ split-area {\n            transition: flex-basis 0.3s;\n        }  \n\n        :host.notrans /deep/ split-area {\n            transition: none !important;\n        }      \n\n        :host /deep/ split-area.notshow {\n            flex-basis: 0 !important;\n            overflow: hidden !important;\n        }      \n\n        :host.vertical /deep/ split-area.notshow {\n            max-width: 0;\n            flex-basis: 0 !important;\n            overflow: hidden !important;\n        }\n    "]
            }),
            __metadata$1("design:paramtypes", [SplitStateService,
                core.ChangeDetectorRef,
                core.ElementRef,
                core.Renderer2])
        ], SplitComponent);
        return SplitComponent;
    }());

    var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$2 = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var SplitAreaDirective = /** @class */ (function () {
        function SplitAreaDirective(elementRef, renderer, split) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.split = split;
            this._order = null;
            this._size = null;
            this._minSizePixel = 0;
            this._visible = true;
            this.visibility = "block";
            this.eventsLockFct = [];
        }
        Object.defineProperty(SplitAreaDirective.prototype, "order", {
            set: function (v) {
                this._order = !isNaN(v) ? v : null;
                this.split.updateArea(this, this._order, this._size, this._minSizePixel);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "size", {
            set: function (v) {
                this._size = !isNaN(v) ? v : null;
                this.split.updateArea(this, this._order, this._size, this._minSizePixel);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "minSizePixel", {
            set: function (v) {
                this._minSizePixel = (!isNaN(v) && v > 0) ? v : 0;
                this.split.updateArea(this, this._order, this._size, this._minSizePixel);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (v) {
                this.visibility = v ? "block" : "none";
                this._visible = v;
                if (this.visible) {
                    this.split.showArea(this);
                }
                else {
                    this.split.hideArea(this);
                }
            },
            enumerable: true,
            configurable: true
        });
        SplitAreaDirective.prototype.ngOnInit = function () {
            this.split.addArea(this, this._order, this._size, this._minSizePixel);
        };
        SplitAreaDirective.prototype.lockEvents = function () {
            this.eventsLockFct.push(this.renderer.listen(this.elementRef.nativeElement, 'selectstart', function (e) { return false; }));
            this.eventsLockFct.push(this.renderer.listen(this.elementRef.nativeElement, 'dragstart', function (e) { return false; }));
        };
        SplitAreaDirective.prototype.unlockEvents = function () {
            while (this.eventsLockFct.length > 0) {
                var fct = this.eventsLockFct.pop();
                if (fct) {
                    fct();
                }
            }
        };
        SplitAreaDirective.prototype.setStyle = function (key, value) {
            this.renderer.setStyle(this.elementRef.nativeElement, key, value);
        };
        SplitAreaDirective.prototype.ngOnDestroy = function () {
            this.split.removeArea(this);
        };
        SplitAreaDirective.prototype.onSizingTransitionEnd = function (evt) {
            //note that all css property transition end could trigger transitionend events
            //this limit only flex-basis transition to trigger the event
            if (!evt || evt.propertyName == "flex-basis")
                this.split.notify("visibleTransitionEnd");
        };
        SplitAreaDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: SplitComponent }
        ]; };
        __decorate$2([
            core.Input(),
            __metadata$2("design:type", Number),
            __metadata$2("design:paramtypes", [Number])
        ], SplitAreaDirective.prototype, "order", null);
        __decorate$2([
            core.Input(),
            __metadata$2("design:type", Object),
            __metadata$2("design:paramtypes", [Object])
        ], SplitAreaDirective.prototype, "size", null);
        __decorate$2([
            core.Input(),
            __metadata$2("design:type", Number),
            __metadata$2("design:paramtypes", [Number])
        ], SplitAreaDirective.prototype, "minSizePixel", null);
        __decorate$2([
            core.Input(),
            __metadata$2("design:type", Boolean),
            __metadata$2("design:paramtypes", [Boolean])
        ], SplitAreaDirective.prototype, "visible", null);
        SplitAreaDirective = __decorate$2([
            core.Directive({
                selector: 'split-area',
                host: {
                    '[style.flex-grow]': '"0"',
                    '[style.flex-shrink]': '"0"',
                    '[style.overflow-x]': '"hidden"',
                    '[style.overflow-y]': '"auto"',
                    '[style.height]': '"100%"',
                    '[class.notshow]': '!visible',
                    '(transitionend)': 'onSizingTransitionEnd($event)'
                }
            }),
            __metadata$2("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                SplitComponent])
        ], SplitAreaDirective);
        return SplitAreaDirective;
    }());

    var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$3 = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var SplitGutterDirective = /** @class */ (function () {
        function SplitGutterDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this._disabled = false;
        }
        Object.defineProperty(SplitGutterDirective.prototype, "order", {
            set: function (v) {
                this.setStyle('order', v);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitGutterDirective.prototype, "direction", {
            set: function (v) {
                this._direction = v;
                this.refreshStyle();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitGutterDirective.prototype, "size", {
            set: function (v) {
                this.setStyle('flex-basis', v + 'px');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SplitGutterDirective.prototype, "disabled", {
            set: function (v) {
                this._disabled = v;
                this.refreshStyle();
            },
            enumerable: true,
            configurable: true
        });
        SplitGutterDirective.prototype.refreshStyle = function () {
            var state = this._disabled === true ? 'disabled' : this._direction;
            this.setStyle('cursor', this.getCursor(state));
            this.setStyle('background-image', "url(\"" + this.getImage(state) + "\")");
        };
        SplitGutterDirective.prototype.setStyle = function (key, value) {
            this.renderer.setStyle(this.elementRef.nativeElement, key, value);
        };
        SplitGutterDirective.prototype.getCursor = function (state) {
            switch (state) {
                case 'disabled':
                    return 'default';
                case 'vertical':
                    return 'row-resize';
                case 'horizontal':
                    return 'col-resize';
            }
        };
        SplitGutterDirective.prototype.getImage = function (state) {
            switch (state) {
                case 'disabled':
                    return '';
                case 'vertical':
                    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC';
                case 'horizontal':
                    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==';
            }
        };
        SplitGutterDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate$3([
            core.Input(),
            __metadata$3("design:type", Number),
            __metadata$3("design:paramtypes", [Number])
        ], SplitGutterDirective.prototype, "order", null);
        __decorate$3([
            core.Input(),
            __metadata$3("design:type", String),
            __metadata$3("design:paramtypes", [String])
        ], SplitGutterDirective.prototype, "direction", null);
        __decorate$3([
            core.Input(),
            __metadata$3("design:type", Object),
            __metadata$3("design:paramtypes", [Object])
        ], SplitGutterDirective.prototype, "size", null);
        __decorate$3([
            core.Input(),
            __metadata$3("design:type", Boolean),
            __metadata$3("design:paramtypes", [Boolean])
        ], SplitGutterDirective.prototype, "disabled", null);
        SplitGutterDirective = __decorate$3([
            core.Directive({
                selector: 'split-gutter'
            }),
            __metadata$3("design:paramtypes", [core.ElementRef,
                core.Renderer2])
        ], SplitGutterDirective);
        return SplitGutterDirective;
    }());

    var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var AngularSplitModule = /** @class */ (function () {
        function AngularSplitModule() {
        }
        AngularSplitModule = __decorate$4([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    SplitComponent,
                    SplitAreaDirective,
                    SplitGutterDirective
                ],
                exports: [
                    SplitComponent,
                    SplitAreaDirective,
                    SplitGutterDirective
                ],
                providers: [SplitStateService, CookieService]
            })
        ], AngularSplitModule);
        return AngularSplitModule;
    }());

    exports.AngularSplitModule = AngularSplitModule;
    exports.BrowserService = BrowserService;
    exports.CookieService = CookieService;
    exports.SplitAreaDirective = SplitAreaDirective;
    exports.SplitAreaState = SplitAreaState;
    exports.SplitComponent = SplitComponent;
    exports.SplitGutterDirective = SplitGutterDirective;
    exports.SplitStateService = SplitStateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-split.umd.js.map
