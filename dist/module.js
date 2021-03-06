"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var component_1 = require('./component');
var directive_1 = require('./directive');
var AceEditorModule = (function () {
    function AceEditorModule() {
    }
    AceEditorModule = __decorate([
        core_1.NgModule({
            declarations: [
                component_1.AceEditorComponent,
                directive_1.AceEditorDirective
            ],
            imports: [],
            providers: [],
            exports: [
                component_1.AceEditorComponent,
                directive_1.AceEditorDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AceEditorModule);
    return AceEditorModule;
}());
exports.AceEditorModule = AceEditorModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLDBCQUFtQyxhQUFhLENBQUMsQ0FBQTtBQUNqRCwwQkFBbUMsYUFBYSxDQUFDLENBQUE7QUFjakQ7SUFBQTtJQUVBLENBQUM7SUFkRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw4QkFBa0I7Z0JBQ2xCLDhCQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsOEJBQWtCO2dCQUNsQiw4QkFBa0I7YUFDckI7U0FDSixDQUFDOzt1QkFBQTtJQUdGLHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBY2VFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjZUVkaXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBY2VFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgQWNlRWRpdG9yRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW10sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEFjZUVkaXRvckNvbXBvbmVudCxcclxuICAgICAgICBBY2VFZGl0b3JEaXJlY3RpdmVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjZUVkaXRvck1vZHVsZSB7XHJcblxyXG59Il19