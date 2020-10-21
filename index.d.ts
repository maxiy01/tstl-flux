/**
 * @noResolution
 */
declare module "flux"
{
    type Easing_type = 'linear'|'quadin'|'quadout'|'quadinout'|'cubicin'|'cubicout'|'cubicinout'|'quartin'|'quartout'|'quartinout'|'quintin'|'quintout'|'quintinout'|'expoin'|'expoout'|'expoinout'|'sinein'|'sineout'|'sineinout'|'circin'|'circout'|'circinout'|'backin'|'backout'|'backinout'|'elasticin'|'elasticout'|'elasticinout'
    class Tween
    {
        /**
         * The easing type which should be used by the tween; type should be a string containing the name of the easing to be used. Default one is `quadout`.
         * More examples can be found [here](https://easings.net/).
         * 
         * @param easing_type easing type to use.
         */
        ease(easing_type: Easing_type): Tween;

        /**
         * Wait before starting the tweening. The default delay time is 0.
         * 
         * @param time number of seconds flux should wait before starting the tween.
         */
        delay(time: number): Tween;
        
        /**
         * Sets the function `fn` to be called when the tween starts (once the delay has finished).
         * `onstart()` can be called multiple times to add more than one function.
         * 
         * @param fn function to be called when the tween starts (once the delay has finished).
         */
        onstart(fn: (...args: any[]) => void): void;
        /**
         * Sets the function `fn` to be called each frame the tween updates a value.
         * `onupdate()` can be called multiple times to add more than one function.
         * 
         * @param fn function to be called each frame the tween updates a value.
         */
        onupdate(fn: (...args: any[]) => void): void;
        /**
         * Sets the function `fn` to be called once the tween has finished and reached its destination values.
         * `oncomplete()` can be called multiple times to add more than one function.
         * 
         * @param fn function to be called once the tween has finished and reached its destination values.
         */
        oncomplete(fn: (...args: any[]) => void): void;
        /**
         * Creates a new tween and chains it to the end of the existing tween.
         * If `obj` is not specified, the `obj` argument from the original tween is used.
         * More info [here](https://github.com/rxi/flux#afterobj-time-vars)
         * 
         * @param obj The object which contains the variables to tween
         * @param time The amount of time the tween should take to complete
         * @param vars @param vars  A table where the keys correspond to the keys in `obj` which should be tweened, and their values correspond to the destination
         */
        after(obj: Object, time: number, vars: {[key: string]: number}): Tween;
        /**
         * Creates a new tween and chains it to the end of the existing tween.
         * If `obj` is not specified, the `obj` argument from the original tween is used.
         * More info [here](https://github.com/rxi/flux#afterobj-time-vars)
         * 
         * @param time The amount of time the tween should take to complete
         * @param vars @param vars  A table where the keys correspond to the keys in `obj` which should be tweened, and their values correspond to the destination
         */
        after(time: number, vars: {[key: string]: number}): Tween;
        /**
         * Stop a tween before it has finished
         * 
         * Usage:
         * ```ts
         * let tween = flux.to(x, 2, { y = 20 }):delay(1)
         * ...
         * tween.stop();
         * ```
         * 
         * This will cause the tween to immediatly be removed from its parent group and will leave its tweened variables at their current values.
         * The tween's oncomplete() callback is not called.
         */
        stop(): void;

        
    }

    class TweenGroup
    {
        /**
         * Any number of numerical values in a table can be tweened simultaneously. 
         * Tweens are started by using the `group.to()` function. This function requires 3 arguments:
         * 
         * @param obj The object which contains the variables to tween
         * @param time The amount of time the tween should take to complete
         * @param vars A table where the keys correspond to the keys in `obj` which should be tweened, and their values correspond to the destination
         */
        to(obj: Object, time, vars: {[key: string]: number}): Tween;
        /**
         * The `group.update()` function should be called at the start of each frame.
         * 
         * @param deltatime time in seconds that has passed since the last call.
         */
        update(deltatime: number): void;

    }

    /**
     * Any number of numerical values in a table can be tweened simultaneously. 
     * Tweens are started by using the `flux.to()` function. This function requires 3 arguments:
     * 
     * @param obj The object which contains the variables to tween
     * @param time The amount of time the tween should take to complete
     * @param vars A table where the keys correspond to the keys in `obj` which should be tweened, and their values correspond to the destination
     */
    function to(this: void, obj: Object, time, vars: {[key: string]: number}): Tween;
    /**
     * The `flux.update()` function should be called at the start of each frame.
     * 
     * @param deltatime time in seconds that has passed since the last call.
     */
    function update(this: void, deltatime: number): void;
    /**
     * Flux provides the ability to create tween groups;
     * These are objects which can have tweens added to them, and who are in charge of updating and handling their contained tweens.
     * 
     * A group is created by calling the flux.group() function.
     * ```ts
     * let group = flux.group();
     * ```
     * 
     * Once a group is created it acts independently of the `flux` object, and must be updated each frame using its own update method.
     * ```ts
     * group.update(deltatime);
     * ```
     * 
     * To add a tween to a group, the group's `to()` method should be used.
     * ```ts
     * group.to(t, 3, { x = 10, y = 20 });
     * ```
     * A good example of where groups are useful is for games where you may have a set of tweens which effect objects in the game world and which you want to pause when the game is paused. A group's tweens can be paused by simply neglecting to call its `update()` method; when a group is destroyed its tweens are also destroyed.
     */
    function group(this: void): TweenGroup;
    /**
     * Add tween to `flux` or group
     * 
     * @param tween tween to add to `flux` or group
     * @returns Added tween
     */
    function add(tween: Tween): Tween;
    /**
     * Remove tween from `flux`
     * @param tween tween to be removed
     * @returns Removed tween
     */
    function remove(tween: Tween): Tween;
    /**
     * Stop tweening variables
     * 
     * @param obj The object which currently tweening variables
     * @param vars currently tweening variables
     */
    function clear(obj: Object, vars: {[key:string]: number}): void;
}