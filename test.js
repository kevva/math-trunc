import test from 'ava';
import m from './';

test(t => {
	t.is(m(13.37), 13);
	t.is(m(42.84), 42);
	t.is(m(0.123), 0);
	t.is(m(-0.123), -0);
	t.is(m('-1.123'), -1);
	t.true(isNaN(m(NaN)));
	t.true(isNaN(m('foo')));
	t.true(isNaN(m()));
});
