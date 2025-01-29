
// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();



new WOW().init();

$(document).ready(function () {
    $('#search-input').on('input', function () {
        var searchValue = $(this).val().toLowerCase();

        $('.sidebar-product-container').each(function () {
            var container = $(this);
            var links = container.find('a');

            links.hide();
            container.hide();

            links.filter(function () {
                return $(this).text().toLowerCase().includes(searchValue);
            }).show().parent().show();
        });
    });
});



$(document).ready(function () {
    $(".buy-btn-product").on("click", function () {
        var productName = $("#product-title").text();
        var productImage = $("#product-image").attr("src");

        Swal.fire({
            icon: "success",
            html: `<img src="${productImage}" style="width: 100%; height: 40vh; object-fit: cover;">`,
            title: `Added ${productName} to cart!`,
            confirmButtonText: 'Continue Shoping',
            customClass: {
                confirmButton: 'confirm-button-full-width'
            }
        });

        $('.confirm-button-full-width').css({
            width: '60vmin',
            textAlign: 'center',
            backgroundColor: '#71c9ce',
            fontSize: '1.7vw',
            border: '1px solid black',
            borderRadius: '50px',
            padding: '5px',
            margin: '0 0 2vh 0',
            fontFamily: '"Audiowide", sans-serif'
        });
    });
});




// see more toggle button start 
$(document).ready(function () {


    $(function () {
        $("#top-sale-see-all").hide();
        $("#top-sale-see-more-btn").on("click", function () {
            $("#top-sale-see-all").toggle();
            $("#top-sale-see-more-btn").text($("#top-sale-see-more-btn").text() === "Hide" ? "See More" : "Hide");
        });
        $("#winterbtn").on("click", function () {
            $("#top-sale-see-all").show();
            $("#top-sale-see-more-btn").text("Hide");
        });
    });



    $(function () {
        $("#boys-see-all").hide();
        $("#boys-see-more-btn").on("click", function () {
            $("#boys-see-all").toggle();
            $("#boys-see-more-btn").text($("#boys-see-more-btn").text() === "Hide" ? "See More" : "Hide");
        });
        $(".boys-open-bar").on("click", function () {
            $("#boys-see-all").show();
            $("#boys-see-more-btn").text("Hide");
        });
    });

    $(function () {
        $("#girls-see-all").hide();
        $("#girls-see-more-btn").on("click", function () {
            $("#girls-see-all").toggle();
            $("#girls-see-more-btn").text($("#girls-see-more-btn").text() === "Hide" ? "See More" : "Hide");
        });
        $(".girls-open-bar").on("click", function () {
            $("#girls-see-all").show();
            $("#girls-see-more-btn").text("Hide");
        });
    });
    $(function () {
        $("#accessories-see-all").hide();
        $("#accessories-see-more-btn").on("click", function () {
            $("#accessories-see-all").toggle();
            $("#accessories-see-more-btn").text($("#accessories-see-more-btn").text() === "Hide" ? "See More" : "Hide");
        });
        $(".accessories-open-bar").on("click", function () {
            $("#accessories-see-all").show();
            $("#accessories-see-more-btn").text("Hide");
        });
    });


});
// see more toggle button end



// show modal front page card start
$(document).ready(function () {
    $('.card-item-btn').click(function () {
        showProductModal(this);
    });
    // Show product modal
    function showProductModal(element) {
        var card = $(element).closest('.responsive-card-box');
        var title = card.find('.card-title').text();
        var description = card.find('.product-detail').text();
        var price = card.find('.product-price').text();
        var image = card.find('.card-img-top').attr('src');

        $('#product-title').text(title);
        $('#product-description').text(description);
        $('#product-price').text(price);
        $('#product-image').attr('src', image);

        $('#productModal').modal('show');
    }

});
// show modal front page card end


// show modal wishlist page card start
$(document).ready(function () {
    $(document).on("click", ".card-item-btn-wishlist-buy", function () {
        showProductModal(this);
    });

    // Show product modal function
    function showProductModal(element) {
        const card = $(element).closest(".wishlist-item");
        const title = card.find(".wishlist-item-title").text();
        const description = card.find(".wishlist-item-para").text();
        const price = card.find(".wishlist-item-price").text();
        const image = card.find(".wishlist-item-img").attr("src");

        $("#product-title").text(title);
        $("#product-description").text(description);
        $("#product-price").text(price);
        $("#product-image").attr("src", image);

        $("#productModal").modal("show");
    }
});
// show modal wishlist page card end

// wishlist heart list start

var wishlistcounter = 0;   ////////  <= wishlistcounter global variable 

$(document).ready(function () {
    $(".like-item").click(function () {
        addToWishlist(this);
        increasewishlist(this);
        $(".nav-heart-icon").addClass("active");
        $(this).toggleClass("active");
        $(this).addClass("active");
        setTimeout(function () {
            $(".like-item").removeClass("active");
            $(".nav-heart-icon").removeClass("active");
        }, 500); // 1000ms = 1s

    });
    // wishlistcounter start 

    function increasewishlist() {
        wishlistcounter++;
        $(".wishliststatus").text(wishlistcounter)
    };
    // wishlistcounter end 

    var wishlist = [];
    // Add to wishlist
    function addToWishlist(card) {
        var card = $(card).closest(".responsive-card-box");
        var title = card.find(".card-title").text();
        var description = card.find(".product-detail").text();
        var price = card.find(".product-price").text();
        var image = card.find(".card-img-top").attr("src");

        wishlist.push({
            title: title,
            description: description,
            price: price,
            image: image,
        });

        updateWishlist();
    }

    function updateWishlist() {
        const wishlistHtml = wishlist.map((item, index) => `
                <div class="wishlist-item cardshadowtop">
                <div class="wishlist-container-sidebar-img img-fluid">
                    <img src="${item.image}" alt="${item.title}" class="wishlist-item-img">
                </div>
                <div class="wishlist-container-sidebar-details">
                    <h4 class="wishlist-item-title">${item.title}</h4>
                    <p class="wishlist-item-para text-truncate">${item.description}</p>
                    <p class="wishlist-item-price">Price: ${item.price}</p>
                    <div class="d-flex">
                        <button class="card-item-btn-wishlist-buy">Buy</button>
                    <button class="remove-from-wishlist fa fa-trash" data-index="${index}"></button>
                    </div>
                </div>
                
                </div>
            `).join('');

        $("#wishlist").html(wishlistHtml);
    }
    // Remove from wishlist using event 
    $(document).on("click", ".remove-from-wishlist", function () {
        var index = $(this).attr("data-index");
        wishlist.splice(index, 1);
        updateWishlist();
        decreasewishlist();
    });
    $("#wishlist-toggle").on("click", function () {
        $("#wishlist-container").toggleClass("show");
    });
});



function decreasewishlist() {
    wishlistcounter--;
    $(".wishliststatus").text(wishlistcounter)
};
// wishlist heart list end

// star list start
$('.star').on('click', function () {
    var index = $(this).index() + 1;
    $('.star').removeClass('active');
    for (var i = 0; i < index; i++) {
        $('#star' + (i + 1)).addClass('active');
    }
});
