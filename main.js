(function () {

  function loadSupabase(cb) {
    const script = document.createElement("script");

    // use local file
    // script.src = 'script.js';

    script.src = "https://unpkg.com/@supabase/supabase-js@2";

    script.async = true;

    // make code in script to be treated as JavaScript module
    // script.type = 'module';

    script.onload = () => {
      cb();
    };

    script.onerror = () => {
      console.log("Error occurred while loading script");
    };

    document.body.appendChild(script);
  }

  if (window.location.pathname.indexOf("register")) {
    // we are in create account view
    useJquery().then((jq) => {
      console.log(`I'm using jQuery version ${jq().jquery}`);

      loadSupabase(async () => {
        // safe to run supabase code
        const supabaseClient = supabase.createClient(
          "https://oqnrxkzkmglkpuyaxcav.supabase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbnJ4a3prbWdsa3B1eWF4Y2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3ODQ2NzQsImV4cCI6MTk5NTM2MDY3NH0.YyFHaj1eEW4fkqDBWH7dj1CG0bsJblBr24vVxUjlo3A"
        );
        let { data: tos, error } = await supabaseClient
          .from("tos")
          .select("*")

          // Filters
          .eq("user_id", "2243086");
        console.log('Hey mate', tos);
      });

      // jq("#login-form input")
      //   .before(`<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
      // <label for="vehicle1"> I have a bike</label><br>`);
    });
  }
})();
