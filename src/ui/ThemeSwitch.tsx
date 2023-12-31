import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-violet-6 dark:border-violet-dark-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed data-[state=checked]:bg-violet-10 dark:data-[state=checked]:bg-violet-dark-10 data-[state=unchecked]:bg-violet-1 dark:data-[state=unchecked]:bg-violet-dark-1"
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-violet-10 dark:bg-violet-dark-10 data-[state=checked]:bg-violet-1  dark:data-[state=checked]:bg-violet-dark-1  shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

const KEY = "adrien-castagliola-theme";
const LIGHT = "light";
const DARK = "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">(LIGHT);

  React.useEffect(() => {
    setTheme(document.documentElement.classList.contains(DARK) ? DARK : LIGHT);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === LIGHT) {
      root.classList.remove(DARK);
    } else if (theme === DARK) {
      root.classList.add(DARK);
    }
  }, [theme]);

  const handleCheckedChange = () => {
    setTheme((theme) => {
      const toggledTheme = theme === DARK ? LIGHT : DARK;
      const matchesDarkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (
        (matchesDarkTheme && toggledTheme === DARK) ||
        (!matchesDarkTheme && toggledTheme === LIGHT)
      ) {
        localStorage.removeItem(KEY);
      } else {
        localStorage.setItem(KEY, toggledTheme);
      }

      return toggledTheme;
    });
  };

  return (
    <div className="flex items-center gap-2 ">
      <Switch
        checked={theme === DARK}
        onCheckedChange={handleCheckedChange}
        aria-label="Changer de thème"
      />
      <span className="text-violet-12 dark:text-violet-dark-12 capitalize">
        {theme}
      </span>
    </div>
  );
};

export default ThemeSwitch;
