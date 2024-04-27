<script>
  window.addEventListener('scroll', function() {
    var sidebar = document.getElementById('sticky-sidebar');
    var sidebarTop = sidebar.getBoundingClientRect().top;

    if (sidebarTop <= 20) {
      sidebar.classList.add('sticky');
    } else {
      sidebar.classList.remove('sticky');
    }
  });
</script>