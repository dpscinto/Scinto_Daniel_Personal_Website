using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Scinto_Daniel_Personal_Website.Startup))]
namespace Scinto_Daniel_Personal_Website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
