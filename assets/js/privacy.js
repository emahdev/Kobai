/* ===========================
   Privacy Modal & Form Consent
   =========================== */
(function ($) {
  'use strict';

  // --- Privacy Modal ---
  var $modal = $('#privacyModal');
  var $overlay = $modal.find('.privacy-modal__overlay');
  var $closeBtn = $modal.find('.privacy-modal__close');

  function openModal(e) {
    e.preventDefault();
    $modal.css('display', 'flex').hide().fadeIn(200);
    $('body').css('overflow', 'hidden');
  }

  function closeModal() {
    $modal.fadeOut(200);
    $('body').css('overflow', '');
  }

  // Open modal on any link with class js-privacy-link
  $(document).on('click', '.js-privacy-link', openModal);

  // Close modal
  $closeBtn.on('click', closeModal);
  $overlay.on('click', closeModal);

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $modal.is(':visible')) {
      closeModal();
    }
  });

  // --- Form Consent Checkbox ---
  var $checkbox = $('#privacyConsent');
  var $submitBtn = $('#contactForm button[type="submit"]');

  if ($checkbox.length && $submitBtn.length) {
    // Disable button initially
    $submitBtn.prop('disabled', true).css('cursor', 'not-allowed').css('opacity', '0.6');

    $checkbox.on('change', function () {
      if (this.checked) {
        $submitBtn.prop('disabled', false).css('cursor', 'pointer').css('opacity', '1');
      } else {
        $submitBtn.prop('disabled', true).css('cursor', 'not-allowed').css('opacity', '0.6');
      }
    });
  }

})(jQuery);
