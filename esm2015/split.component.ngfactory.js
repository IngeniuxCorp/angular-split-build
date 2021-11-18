/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./splitGutter.directive";
import * as i2 from "@angular/common";
import * as i3 from "./split.component";
import * as i4 from "./splitStateService";
var styles_SplitComponent = ["[_nghost-%COMP%] {\n            display: flex;\n            flex-wrap: nowrap;\n            justify-content: flex-start;\n            flex-direction: row;\n        }\n\n        .vertical[_nghost-%COMP%] {\n            flex-direction: column;\n        }\n\n        split-gutter[_ngcontent-%COMP%] {\n            flex-grow: 0;\n            flex-shrink: 0;\n            flex-basis: 10px;\n            height: 100%;\n            background-color: #eeeeee;\n            background-position: 50%;\n            background-repeat: no-repeat;\n        }\n\n        .vertical[_nghost-%COMP%]   split-gutter[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n\n        [_nghost-%COMP%]     split-area {\n            transition: flex-basis 0.3s;\n        }  \n\n        .notrans[_nghost-%COMP%]     split-area {\n            transition: none !important;\n        }      \n\n        [_nghost-%COMP%]     split-area.notshow {\n            flex-basis: 0 !important;\n            overflow: hidden !important;\n        }      \n\n        .vertical[_nghost-%COMP%]     split-area.notshow {\n            max-width: 0;\n            flex-basis: 0 !important;\n            overflow: hidden !important;\n        }"];
var RenderType_SplitComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_SplitComponent, data: {} });
export { RenderType_SplitComponent as RenderType_SplitComponent };
function View_SplitComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "split-gutter", [], null, [[null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.startDragging($event, ((_v.parent.context.index * 2) + 1)) !== false);
        ad = (pd_0 && ad);
    } if (("touchstart" === en)) {
        var pd_1 = (_co.startDragging($event, ((_v.parent.context.index * 2) + 1)) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 16384, null, 0, i1.SplitGutterDirective, [i0.ElementRef, i0.Renderer2], { order: [0, "order"], direction: [1, "direction"], size: [2, "size"], disabled: [3, "disabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.parent.context.index * 2) + 1); var currVal_1 = _co.direction; var currVal_2 = _co.gutterSize; var currVal_3 = _co.disabled; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_SplitComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_SplitComponent_2)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_v.context.last === false) && _v.context.$implicit.component.visible) && !_co.isLastVisibleArea(_v.context.$implicit)); _ck(_v, 1, 0, currVal_0); }, null); }
export function View_SplitComponent_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, [["cover", 1]], null, 1, "div", [["style", "position:absolute;left:0;top:0;right:0;bottom:0;z-index:100;"]], [[4, "display", null]], null, null, null, null)), i0.ɵpid(131072, i2.AsyncPipe, [i0.ChangeDetectorRef]), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SplitComponent_1)), i0.ɵdid(4, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.areas; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 1).transform(_co.coverDisplay)); _ck(_v, 0, 0, currVal_0); }); }
export function View_SplitComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "split", [], [[2, "vertical", null], [2, "notrans", null], [4, "width", null], [4, "height", null]], null, null, View_SplitComponent_0, RenderType_SplitComponent)), i0.ɵdid(1, 4898816, null, 0, i3.SplitComponent, [i4.SplitStateService, i0.ChangeDetectorRef, i0.ElementRef, i0.Renderer2], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).styleFlexDirection; var currVal_1 = i0.ɵnov(_v, 1).dragging; var currVal_2 = i0.ɵnov(_v, 1).styleWidth; var currVal_3 = i0.ɵnov(_v, 1).styleHeight; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
var SplitComponentNgFactory = i0.ɵccf("split", i3.SplitComponent, View_SplitComponent_Host_0, { direction: "direction", width: "width", height: "height", gutterSize: "gutterSize", disabled: "disabled", animateAreaToggle: "animateAreaToggle", saveStates: "saveStates", name: "name" }, { dragStart: "dragStart", dragProgress: "dragProgress", dragEnd: "dragEnd", visibleTransitionEnd: "visibleTransitionEnd" }, ["*"]);
export { SplitComponentNgFactory as SplitComponentNgFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuY29tcG9uZW50Lm5nZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3BsaXQvIiwic291cmNlcyI6WyJzcGxpdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwic3BsaXQuY29tcG9uZW50LnRzLlNwbGl0Q29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7eURDS1ksbUtBTThELFlBRGhEOzt3QkFBOEM7TUFDOUM7O3dCQUErQztNQU43RCx1TkFNOEQsaURBTGhELGtEQUFtQixHQUNuQixtQkFBdUIsWUFDdkIsbUJBQW1CLGFBQ25CLG1CQUFxQixXQUpuQyxZQU04RCxFQUxoRCxTQUFtQixFQUNuQixTQUF1QixFQUN2QixTQUFtQixFQUNuQixTQUFxQjt5REFKbkMsOEtBTThELHNGQU5oRCxxSEFBNEUsc0JBQTFGLFlBTThELEVBTmhELFNBQTRFO2dFQUo5RixpTEFDMkMsSUFBdkMsbURBQXNDLElBQzFDLGVBQVksSUFDWiw0TUFBZ0YsaURBQXBELG1CQUFpQixRQUE3QyxZQUFnRixFQUFwRCxTQUFpQixtREFGekMsOERBQXNDLGlCQUQxQyxZQUMyQyxFQUF2QyxTQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGkwIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaTAuQ29tcG9uZW50RmFjdG9yeTtcbiIsIlxuICAgICAgICA8ZGl2ICNjb3ZlciBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO3otaW5kZXg6MTAwO1wiXG4gICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJjb3ZlckRpc3BsYXkgfCBhc3luY1wiPjwvZGl2PlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtYXJlYSBbbmdGb3JPZl09XCJhcmVhc1wiIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWxhc3Q9XCJsYXN0XCI+XG4gICAgICAgICAgICA8c3BsaXQtZ3V0dGVyICpuZ0lmPVwibGFzdCA9PT0gZmFsc2UgJiYgYXJlYS5jb21wb25lbnQudmlzaWJsZSAmJiAhaXNMYXN0VmlzaWJsZUFyZWEoYXJlYSlcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW29yZGVyXT1cImluZGV4KjIrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3NpemVdPVwiZ3V0dGVyU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwic3RhcnREcmFnZ2luZygkZXZlbnQsIGluZGV4KjIrMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJzdGFydERyYWdnaW5nKCRldmVudCwgaW5kZXgqMisxKVwiPjwvc3BsaXQtZ3V0dGVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPiJdfQ==