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
require('brace');
require('brace/theme/monokai');
require('brace/mode/html');
var AceEditorDirective = (function () {
    function AceEditorDirective(elementRef) {
        this.textChanged = new core_1.EventEmitter();
        this.textChange = new core_1.EventEmitter();
        this._options = {};
        this._readOnly = false;
        this._theme = "monokai";
        this._mode = "html";
        this._autoUpdateContent = true;
        this._durationBeforeCallback = 0;
        this._text = "";
        var el = elementRef.nativeElement;
        this.editor = ace["edit"](el);
        this.init();
        this.initEvents();
    }
    AceEditorDirective.prototype.init = function () {
        this.editor.setOptions(this._options || {});
        this.editor.setTheme("ace/theme/" + this._theme);
        this.setMode(this._mode);
        this.editor.setReadOnly(this._readOnly);
    };
    AceEditorDirective.prototype.initEvents = function () {
        var _this = this;
        var me = this;
        me.editor.on('change', function () { return _this.updateText(); });
        me.editor.on('paste', function () { return _this.updateText(); });
    };
    AceEditorDirective.prototype.updateText = function () {
        var newVal = this.editor.getValue();
        if (newVal === this.oldText) {
            return;
        }
        if (typeof this.oldText !== 'undefined') {
            if (!this._durationBeforeCallback) {
                this._text = newVal;
                this.textChange.emit(newVal);
                this.textChanged.emit(newVal);
            }
            else {
                if (this.timeoutSaving != null) {
                    clearTimeout(this.timeoutSaving);
                }
                this.timeoutSaving = setTimeout(function () {
                    this._text = newVal;
                    this.textChange.emit(newVal);
                    this.textChanged.emit(newVal);
                    this.timeoutSaving = null;
                }, this._durationBeforeCallback);
            }
        }
        this.oldText = newVal;
    };
    Object.defineProperty(AceEditorDirective.prototype, "options", {
        set: function (options) {
            this._options = options;
            this.editor.setOptions(options || {});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "readOnly", {
        set: function (readOnly) {
            this._readOnly = readOnly;
            this.editor.setReadOnly(readOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "theme", {
        set: function (theme) {
            this._theme = theme;
            this.editor.setTheme("ace/theme/" + theme);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "mode", {
        set: function (mode) {
            this.setMode(mode);
        },
        enumerable: true,
        configurable: true
    });
    AceEditorDirective.prototype.setMode = function (mode) {
        this._mode = mode;
        if (typeof this._mode === 'object') {
            this.editor.getSession().setMode(this._mode);
        }
        else {
            this.editor.getSession().setMode("ace/mode/" + this._mode);
        }
    };
    Object.defineProperty(AceEditorDirective.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this.setText(text);
        },
        enumerable: true,
        configurable: true
    });
    AceEditorDirective.prototype.setText = function (text) {
        if (this._text !== text) {
            if (text === null || text === undefined) {
                text = "";
            }
            if (this._autoUpdateContent === true) {
                this._text = text;
                this.editor.setValue(text);
                this.editor.clearSelection();
            }
        }
    };
    Object.defineProperty(AceEditorDirective.prototype, "autoUpdateContent", {
        set: function (status) {
            this._autoUpdateContent = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "durationBeforeCallback", {
        set: function (num) {
            this.setDurationBeforeCallback(num);
        },
        enumerable: true,
        configurable: true
    });
    AceEditorDirective.prototype.setDurationBeforeCallback = function (num) {
        this._durationBeforeCallback = num;
    };
    Object.defineProperty(AceEditorDirective.prototype, "aceEditor", {
        get: function () {
            return this.editor;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AceEditorDirective.prototype, "textChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AceEditorDirective.prototype, "textChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "options", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "mode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AceEditorDirective.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "autoUpdateContent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], AceEditorDirective.prototype, "durationBeforeCallback", null);
    AceEditorDirective = __decorate([
        core_1.Directive({
            selector: '[ace-editor]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AceEditorDirective);
    return AceEditorDirective;
}());
exports.AceEditorDirective = AceEditorDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlFLGVBQWUsQ0FBQyxDQUFBO0FBQ2pGLFFBQU8sT0FBTyxDQUFDLENBQUE7QUFDZixRQUFPLHFCQUFxQixDQUFDLENBQUE7QUFDN0IsUUFBTyxpQkFBaUIsQ0FBQyxDQUFBO0FBT3pCO0lBY0ksNEJBQVksVUFBc0I7UUFieEIsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNqQyxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDMUMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsVUFBSyxHQUFRLE1BQU0sQ0FBQztRQUNwQix1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFDbkMsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDO1FBQ3BDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFNZixJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBYSxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFB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QUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRVEsc0JBQUksc0RBQXNCO2FBQTFCLFVBQTJCLEdBQVc7WUFDM0MsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0RBQXlCLEdBQXpCLFVBQTBCLEdBQVc7UUFDakMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0JBQUkseUNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBN0hEO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzswREFBQTtJQTREVDtRQUFDLFlBQUssRUFBRTs7O3FEQUFBO0lBS1I7UUFBQyxZQUFLLEVBQUU7OztzREFBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOzs7bURBQUE7SUFLUjtRQUFDLFlBQUssRUFBRTs7O2tEQUFBO0lBYVI7UUFBQyxZQUFLLEVBQUU7O2tEQUFBO0lBc0JSO1FBQUMsWUFBSyxFQUFFOzs7K0RBQUE7SUFJUjtRQUFDLFlBQUssRUFBRTs7O29FQUFBO0lBdkhaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1NBQzNCLENBQUM7OzBCQUFBO0lBZ0lGLHlCQUFDO0FBQUQsQ0FBQyxBQS9IRCxJQStIQztBQS9IWSwwQkFBa0IscUJBK0g5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAnYnJhY2UnO1xyXG5pbXBvcnQgJ2JyYWNlL3RoZW1lL21vbm9rYWknO1xyXG5pbXBvcnQgJ2JyYWNlL21vZGUvaHRtbCc7XHJcblxyXG5kZWNsYXJlIHZhciBhY2U6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYWNlLWVkaXRvcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2VFZGl0b3JEaXJlY3RpdmUge1xyXG4gICAgQE91dHB1dCgpIHRleHRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBfb3B0aW9uczogYW55ID0ge307XHJcbiAgICBfcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIF90aGVtZTogc3RyaW5nID0gXCJtb25va2FpXCI7XHJcbiAgICBfbW9kZTogYW55ID0gXCJodG1sXCI7XHJcbiAgICBfYXV0b1VwZGF0ZUNvbnRlbnQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgX2R1cmF0aW9uQmVmb3JlQ2FsbGJhY2s6IG51bWJlciA9IDA7XHJcbiAgICBfdGV4dDogc3RyaW5nID0gXCJcIjtcclxuICAgIGVkaXRvcjogYW55O1xyXG4gICAgb2xkVGV4dDogYW55O1xyXG4gICAgdGltZW91dFNhdmluZzogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICBsZXQgZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBhY2VbXCJlZGl0XCJdKGVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmVkaXRvci5zZXRPcHRpb25zKHRoaXMuX29wdGlvbnMgfHwge30pO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvJHt0aGlzLl90aGVtZX1gKTtcclxuICAgICAgICB0aGlzLnNldE1vZGUodGhpcy5fbW9kZSk7XHJcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0UmVhZE9ubHkodGhpcy5fcmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRFdmVudHMoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuXHJcbiAgICAgICAgbWUuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XHJcbiAgICAgICAgbWUuZWRpdG9yLm9uKCdwYXN0ZScsICgpID0+IHRoaXMudXBkYXRlVGV4dCgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlVGV4dCgpIHtcclxuICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcclxuICAgICAgICBpZiAobmV3VmFsID09PSB0aGlzLm9sZFRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub2xkVGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kdXJhdGlvbkJlZm9yZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0ID0gbmV3VmFsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Q2hhbmdlLmVtaXQobmV3VmFsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dENoYW5nZWQuZW1pdChuZXdWYWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dFNhdmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFNhdmluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0U2F2aW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRDaGFuZ2UuZW1pdChuZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dENoYW5nZWQuZW1pdChuZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dFNhdmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLl9kdXJhdGlvbkJlZm9yZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9sZFRleHQgPSBuZXdWYWw7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0T3B0aW9ucyhvcHRpb25zIHx8IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgcmVhZE9ubHkocmVhZE9ubHk6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gcmVhZE9ubHk7XHJcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0UmVhZE9ubHkocmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCB0aGVtZSh0aGVtZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcclxuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShgYWNlL3RoZW1lLyR7dGhlbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IG1vZGUobW9kZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vZGUobW9kZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9tb2RlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZSh0aGlzLl9tb2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHt0aGlzLl9tb2RlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFRleHQodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dCh0ZXh0OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGV4dCAhPT0gdGV4dCkge1xyXG4gICAgICAgICAgICBpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYXV0b1VwZGF0ZUNvbnRlbnQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VmFsdWUodGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBhdXRvVXBkYXRlQ29udGVudChzdGF0dXM6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2F1dG9VcGRhdGVDb250ZW50ID0gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkdXJhdGlvbkJlZm9yZUNhbGxiYWNrKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXREdXJhdGlvbkJlZm9yZUNhbGxiYWNrKG51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVyYXRpb25CZWZvcmVDYWxsYmFjayhudW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uQmVmb3JlQ2FsbGJhY2sgPSBudW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjZUVkaXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3I7XHJcbiAgICB9XHJcbn1cclxuIl19