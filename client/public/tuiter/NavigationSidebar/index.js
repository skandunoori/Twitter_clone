const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
        <div class="list-group-item">
            <i class="fab fa-twitter"></i>
        </div>
        <div class="list-group-item ${active === 'home' ? 'active' : ''}">
            <a href="../HomeScreen/index.html" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-home"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                    Home
                  </div>
            </div>
            </a>
        </div>
        <div class="list-group-item ${active === 'explore' ? 'active' : ''}">
            <a href="../explore/index.html" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-hashtag"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                    Explore
                  </div>
            </div>
            </a>
        </div>
        <div class="list-group-item">
            <a href="#" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-bell"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                    Notifications
                  </div>
            </div>
            </a>
        </div>
        <div class="list-group-item">
            <a href="#" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                    Messages
                  </div>
            </div>
            </a>
        </div>
        <div class="list-group-item">
            <a href="#" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-bookmark"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                    Bookmarks
                  </div>
            </div>
            </a>
        </div>
        <div class="list-group-item">
            <a href="#" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-list"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                    Lists
                  </div>
            </div>
            </a>
        </div>
        <div class="list-group-item">
            <a href="#" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                    Profile
                  </div>
            </div>
            </a>
        </div>
        <div class="list-group-item">
            <a href="#" style="text-decoration:none" class="text-white">
            <div class="row">
                  <div class="col-2">
                    <i class="fas fa-ellipsis-h"></i>
                  </div>
                  <div class="col-10 d-none d-xl-block">
                  More
                  </div>
            </div>
            </a>
        </div>
      </div>
        <button class="btn btn-primary w-100 mt-2 rounded-pill ">Tuit</button>
    `);
   }
   export default NavigationSidebar;