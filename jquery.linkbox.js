!function( $ ){
	var Linkbox = function ( element, options ) {
		this.$element = $(element);
		this.options = $.extend({}, $.fn.linkbox.defaults, options);
		// target
		this.$anchors = this.$element.find('a');
		this.$target = this.$anchors.filter('[data-linkbox="target"]');
		if (!this.$target.length) {
			this.$target = this.$anchors.eq(0);
		}
		this.$anchors.on('click.linkbox.data-api', function (e) {
			e.stopPropagation();
		});
		// bind
		this.bindEvents();
		this.mouseEnter();
	}
	Linkbox.prototype = {
		constructor: Linkbox
		, click: function (e) {
			window.location = this.$target.attr('href');
			return this;
		}
		, mouseEnter: function (e) {
			this.$element.addClass(this.options.toggleClass);
			return this;
		}
		, mouseLeave: function (e) {
			this.$element.removeClass(this.options.toggleClass);
			return this;
		}
		, bindEvents: function () {
			var _this = this;
			this.$element.on('click.linkbox.data-api', function (e) {
				e.preventDefault();
				_this.click(e);
			});
			this.$element.on('mouseenter.linkbox.data-api', function (e) {
				e.preventDefault();
				_this.mouseEnter(e);
			});
			this.$element.on('mouseleave.linkbox.data-api', function (e) {
				e.preventDefault();
				_this.mouseLeave(e);
			});
		}
	}

	/* PLUGIN DEFINITION
	 * =========================== */
	$.fn.linkbox = function ( option ) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data('linkbox');
			var options = typeof option == 'object' && option;
			if (!data) {
				$this.data('linkbox', (data = new Linkbox(this, options))).css('cursor', 'pointer');
			}
			if (typeof option == 'string') {
				data[option]();
			}
		});
	}
	// default options
	$.fn.linkbox.defaults = {
		toggleClass: 'linkbox'
	};
	// construct
	$.fn.linkbox.Constructor = Linkbox;

	/* DATA-API
	 * ================== */
	$(function () {
		$('body').on('mouseenter.linkbox.data-api', '[data-click="linkbox"]', function (e) {
			var $this = $(this);
			var option = $this.data('linkbox') ? 'mouseEnter' : $this.data('linkbox');
			e.preventDefault();
			$this.linkbox(option);
		}).on('click.linkbox.data-api', '[data-click="linkbox"]', function (e) {
			var $this = $(this);
			var option = $this.data('linkbox') ? 'click' : $this.data('linkbox');
			e.preventDefault();
			$this.linkbox(option);
		});
	});

}( window.jQuery );
