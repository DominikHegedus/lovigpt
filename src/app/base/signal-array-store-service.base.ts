import { computed, Signal, signal } from '@angular/core';

export class SignalArrayStoreService<T> {
  readonly $state = signal([] as T[]);

  public $all(): Signal<T[]> {
    return computed(() => this.$state());
  }

  public $find(findFn: (item: T) => boolean): Signal<T | undefined> {
    return computed(() => this.$state().find((item) => findFn(item)));
  }

  public $has(item: T): Signal<boolean> {
    return computed(() => this.$state().includes(item));
  }

  public $exists(identifyFn: (item: T) => boolean) {
    return computed(
      () => this.$state().findIndex((item) => identifyFn(item)) > -1,
    );
  }

  public set(items: T[]): void {
    this.$state.update(() => items);
  }

  public add(item: T): void {
    this.$state.update((items) => [...items, item]);
  }

  public remove(item: T): void {
    this.$state.update((items) => {
      const index = items.findIndex((currentItem) => currentItem === item);
      if (index > -1) {
        return items.slice(index);
      }
      return items;
    });
  }

  public clear(): void {
    this.$state.update(() => []);
  }
}
